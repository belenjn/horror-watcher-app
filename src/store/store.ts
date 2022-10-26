import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import moviesSlice from "../features/moviesSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    movies: moviesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
