import { createSlice } from "@reduxjs/toolkit";

export interface StateOfAuth {
  status: string; //not-authenticated, authenticated
  userId: null | string;
  email: null | string;
  displayName: null | string;
  errorMessage: null | string;
}

const initialState: StateOfAuth = {
  status: "checking",
  userId: null,
  email: null,
  displayName: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, {payload}) => {
      state.status = "authenticated",
      state.userId = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.errorMessage = null;
    },
    logout: (state, {payload}) => {
      state.status = "not-authenticated",
      state.userId = null;
      state.email = null;
      state.displayName = null;
      state.errorMessage = payload?.errorMessage;
    },
    checkingCredentials: (state) => {
        state.status = 'checking'
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer;
