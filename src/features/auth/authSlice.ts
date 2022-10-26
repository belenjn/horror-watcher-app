import { createSlice } from "@reduxjs/toolkit";

export interface StateOfAuth {
  status: string; //not-authenticated, authenticated
  userId: null | string;
  email: null | string;
  displayName: null | string;
  errorMessage: null | string;
}

const initialState: StateOfAuth = {
  status: "checking", //not-authenticated, authenticated
  userId: null,
  email: null,
  displayName: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {},
    logout: (state, action) => {},
    checkingCredentials: (state) => {},
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer;
