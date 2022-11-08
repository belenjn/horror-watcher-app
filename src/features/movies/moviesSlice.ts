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
  pendingMovies: Movie[];
  status: Status;
}

const initialState: StateOfMovies = {
  movies: [],
  favoritesMovies: [],
  pendingMovies: [],
  status: Status.empty,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovieToFavorites: (state, action) => {
      state.favoritesMovies.push(action.payload);
    },
    addMovieToPending: (state, action) => {
      state.pendingMovies.push(action.payload);
    },
    setFavoritesMovies: (state, action) => {
      state.favoritesMovies = action.payload;
    },
    setPendingMovies: (state, action) => {
      state.pendingMovies = action.payload;
    },
    deleteMovieById: (state, action) => {
      state.favoritesMovies = state.favoritesMovies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    filterFavoritesMoviesByOlderDate: (state) => {
      state.favoritesMovies.sort((a, b) => {
        if (a.release_date < b.release_date) {
          return -1;
        }
        if (a.release_date > b.release_date) {
          return 1;
        }
        return 0;
      });
    },
    filterFavoritesMoviesByNewestDate: (state) => {
      state.favoritesMovies.sort((a, b) => {
        if (a.release_date > b.release_date) {
          return -1;
        }
        if (a.release_date < b.release_date) {
          return 1;
        }
        return 0;
      });
    },
    filterPendingMoviesByOlderDate: (state) => {
      state.pendingMovies.sort((a, b) => {
        if (a.release_date < b.release_date) {
          return -1;
        }
        if (a.release_date > b.release_date) {
          return 1;
        }
        return 0;
      });
    },
    filterPendingMoviesByNewestDate: (state) => {
      state.pendingMovies.sort((a, b) => {
        if (a.release_date > b.release_date) {
          return -1;
        }
        if (a.release_date < b.release_date) {
          return 1;
        }
        return 0;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetMovies.pending, (state): void => {
        state.status = Status.loading;
      })
      .addCase(fetchGetMovies.fulfilled, (state, action): void => {
        state.status = Status.success;
        state.movies = [...state.movies, ...action.payload];
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
  setPendingMovies,
  filterFavoritesMoviesByNewestDate,
  filterFavoritesMoviesByOlderDate,
  filterPendingMoviesByNewestDate,
  filterPendingMoviesByOlderDate,
} = moviesSlice.actions;

export default moviesSlice.reducer;
