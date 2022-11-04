import { AnyAction, createAsyncThunk, ThunkDispatch } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { StateOfAuth } from "../../auth/authSlice";
import { moviesAPI } from "../moviesAPI";
import { setSaving, StateOfMovies } from "../moviesSlice";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../firebase/config";
import { Movie } from "../../../types/movie";

export const fetchGetMovies = createAsyncThunk(
  "fetch movies function",
  async (page: number) => {
    return await moviesAPI(page);
  }
);

export const startAddMovieToFavorites = () => {
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

    const newMovie: Movie = {
      id: 1,
      title: "",
      overview: "",
      vote_average: 1,
      poster_path: "",
      release_date: "",
      original_language: "",
    };

    const {userId} = getState().auth;

    const newDoc = doc(collection(FirebaseDB, `${userId}/favorites-movies/movies/`))

    const setDocResp = await setDoc(newDoc, newMovie)
   
    console.log({newDoc, setDocResp})
  };
};
