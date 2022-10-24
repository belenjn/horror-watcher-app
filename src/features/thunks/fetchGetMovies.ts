import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { moviesAPI } from "../moviesAPI";

export const fetchGetMovies: AsyncThunk<any, void, {}> = createAsyncThunk(
  "fetch movies function",
  async () => {
    try {
      return await moviesAPI();
    } catch (error: undefined | any) {
      throw new Error("Error: ", error);
    }
  }
);
