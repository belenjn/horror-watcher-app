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
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../firebase/config";
import { Movie } from "../../../types/movie";
import { async } from "@firebase/util";
import { loadMovies } from "../../../helpers/loadMovies";

export const fetchGetMovies = createAsyncThunk(
  "fetch movies function",
  async (page: number) => {
    return await moviesAPI(page);
  }
);

export const startAddMovieToFavorites = (movie: any) => {
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

    await setDoc(newDoc, movie);

    movie.id = newDoc.id;

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

export const startDeletingMovie = () => {
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

    const { active: movie } = getState().movies.favoritesMovies;

    console.log({userId, movie})

    const docRef = doc(
      FirebaseDB,
      `${userId}/favorites-movies/movies/${movie.id}`
    );
    await deleteDoc(docRef);

    dispatch(deleteMovieById(movie.id));
  };
};
