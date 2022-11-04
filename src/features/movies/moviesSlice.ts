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
  favoritesMovies: Movie[];
  status: Status;
  active: null | {};
}

const initialState: StateOfMovies = {
  movies: [],
  favoritesMovies: [],
  status: Status.empty,
  active: null, // active : {id: 123456, title: ''}
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovieToFavorites: (state, action) => {
      state.favoritesMovies.push(action.payload);
    },
    addMovieToPending: (state, action) => {

    },
    setFavoritesMovies: (state, action) => {
      state.favoritesMovies = action.payload;
    },
    deleteMovieById: (state, action) => {
      state.active = null;
      state.favoritesMovies = state.favoritesMovies.filter(
        (movie) => movie.id !== action.payload
      );
    },
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
  deleteMovieById,
  setFavoritesMovies,
  filterMoviesByOlderDate,
  filterMoviesByNewestDate,
} = moviesSlice.actions;

export default moviesSlice.reducer;
