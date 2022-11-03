import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { Movie } from "../../types/movie";
import { fetchGetMovies } from "./thunks/thunks";

enum Status {
  empty,
  loading,
  success,
  failed,
}

export interface StateOfMovies {
  movies: Movie[];
  status: Status;
  active: null | {};
  isSaving: boolean;
}

const initialState: StateOfMovies = {
  movies: [],
  status: Status.empty,
  active: null, // active : {id: 123456, title: ''}
  isSaving: true,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovieToFavorites: (state, action) => {},
    addMovieToPending: (state, action) => {},
    setSaving: (state) => {},
    deleteMovieById: (state, action) => {},
    filterMoviesByOlderDate: (state) => {},
    filterMoviesByNewestDate: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetMovies.pending, (state): void => {
        state.status = Status.loading;
      })
      .addCase(fetchGetMovies.fulfilled, (state, action): void => {
        state.status = Status.success;
        state.movies = state.movies.concat(action.payload);
      })
      .addCase(fetchGetMovies.rejected, (state): void => {
        state.status = Status.failed;
      });
  },
});
export const movies = (state: RootState) => state.movies.movies;

export const {
  addMovieToFavorites,
  addMovieToPending,
  setSaving,
  deleteMovieById,
  filterMoviesByOlderDate,
  filterMoviesByNewestDate,
} = moviesSlice.actions;

export default moviesSlice.reducer;
