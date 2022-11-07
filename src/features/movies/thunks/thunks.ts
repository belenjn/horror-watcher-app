import { AnyAction, createAsyncThunk, ThunkDispatch } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { StateOfAuth } from "../../auth/authSlice";
import { moviesAPI } from "../moviesAPI";
import {
  addMovieToFavorites,
  deleteMovieById,
  setFavoritesMovies,
  StateOfMovies,
} from "../moviesSlice";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore/lite";
import { FirebaseDB } from "../../../firebase/config";
import { loadMovies } from "../../../helpers/loadMovies";
import { Movie } from "../../../types/movie";

export const fetchGetMovies = createAsyncThunk(
  "fetch movies function",
  async (page: number) => {
    return await moviesAPI(page);
  }
);

export const startAddMovieToFavorites = (movie: Movie) => {
  return async (
    dispatch: ThunkDispatch<
      {
        auth: StateOfAuth;
        movies: StateOfMovies;
      },
      undefined,
      AnyAction
    > &
      Dispatch<AnyAction>,
    getState: any
  ) => {
    const { userId } = getState().auth;

    const newDoc = doc(
      collection(FirebaseDB, `${userId}/favorites-movies/movies/`)
    );

    await setDoc(newDoc, { ...movie, id: newDoc.id });

    let movieId = movie.id;

    movieId = parseInt(newDoc.id);

    dispatch(addMovieToFavorites(movie));
  };
};

export const startLoadingFavoritesMovies = () => {
  return async (
    dispatch: ThunkDispatch<
      {
        auth: StateOfAuth;
        movies: StateOfMovies;
      },
      undefined,
      AnyAction
    > &
      Dispatch<AnyAction>,
    getState: any
  ) => {
    const { userId } = getState().auth;

    if (!userId) throw new Error("The userId doesn't exist");

    const movies = await loadMovies(userId);

    dispatch(setFavoritesMovies(movies));
  };
};

export const startDeletingMovie = (movieId: number) => {
  return async (
    dispatch: ThunkDispatch<
      {
        auth: StateOfAuth;
        movies: StateOfMovies;
      },
      undefined,
      AnyAction
    > &
      Dispatch<AnyAction>,
    getState: any
  ) => {
    const { userId } = getState().auth;

    const docRef = doc(FirebaseDB, `${userId}/favorites-movies/movies/${movieId}`);

    await deleteDoc(docRef);

    dispatch(deleteMovieById(movieId));
  };
};
