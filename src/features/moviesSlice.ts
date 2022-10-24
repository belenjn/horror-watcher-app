import { createSlice } from "@reduxjs/toolkit";
import { fetchGetMovies } from "./thunks/fetchGetMovies";

enum Status {
  empty,
  loading,
  success,
  failed,
}

export interface StateOfMovies {
  posts: [];
  status: Status;
}

const initialState = {
  movies: [],
  status: Status.empty,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetMovies.pending, (state): void => {
        state.status = Status.loading;
      })
      .addCase(fetchGetMovies.fulfilled, (state, action): void => {
        state.status = Status.success;
      })
      .addCase(fetchGetMovies.rejected, (state): void => {
        state.status = Status.failed;
      });
  },
});

export default postsSlice.reducer;
