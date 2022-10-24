import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { Movie } from "../types/movie";
import { fetchGetMovies } from "./thunks/fetchGetMovies";

enum Status {
  empty,
  loading,
  success,
  failed,
}

export interface StateOfMovies {
  movies: Movie[];
  status: Status;
}

const initialState: StateOfMovies = {
  movies: [],
  status: Status.empty,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetMovies.pending, (state): void => {
        state.status = Status.loading;
      })
      .addCase(fetchGetMovies.fulfilled, (state, action): void => {
        state.status = Status.success;
        if (state.movies.length !== 0) {
          state.movies = [...state.movies, action.payload];
          return;
        }

        state.movies = action.payload;
      })
      .addCase(fetchGetMovies.rejected, (state): void => {
        state.status = Status.failed;
      });
  },
});
export const movies = (state: RootState) => state.movies.movies;

export default moviesSlice.reducer;
