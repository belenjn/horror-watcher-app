import { createAsyncThunk } from "@reduxjs/toolkit";
import { moviesAPI } from "../moviesAPI";

export const fetchGetMovies = createAsyncThunk(
  "fetch movies function",
  async (page: number) => {
    return await moviesAPI(page);
  }
);

export const startAddMovieToFavorites = createAsyncThunk(
  "add movie to favorites",
  async (dispatch) => {
    console.log("adding movie to fav movies");
  }
);
