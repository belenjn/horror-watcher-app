import { createAsyncThunk } from "@reduxjs/toolkit";
import { moviesAPI } from "../moviesAPI";

export const fetchGetMovies = createAsyncThunk(
  "fetch movies function",
  async (page: number) => {
    return await moviesAPI(page);
  }
);

