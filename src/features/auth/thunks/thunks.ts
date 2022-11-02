import { AnyAction, Dispatch, ThunkDispatch } from "@reduxjs/toolkit";
import {
  registerUserWithEmailPassword,
  signInWithGoogle,
} from "../../../firebase/providers";
import { StateOfMovies } from "../../moviesSlice";
import { checkingCredentials, login, logout, StateOfAuth } from "../authSlice";

export const checkingAuthentication = (
  email: string | undefined,
  password: string | undefined
) => {
  return async (
    dispatch: ThunkDispatch<
      {
        auth: StateOfAuth;
        movies: StateOfMovies;
      },
      undefined,
      AnyAction
    > &
      Dispatch<AnyAction>
  ) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (
    dispatch: ThunkDispatch<
      {
        auth: StateOfAuth;
        movies: StateOfMovies;
      },
      undefined,
      AnyAction
    > &
      Dispatch<AnyAction>
  ) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();

    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}: {
  email: string;
  password: string;
  displayName: string;
}) => {
  return async (
    dispatch: ThunkDispatch<
      {
        auth: StateOfAuth;
        movies: StateOfMovies;
      },
      undefined,
      AnyAction
    > &
      Dispatch<AnyAction>
  ) => {
    dispatch(checkingCredentials());

    const resp = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });

    console.log(resp)
  };
};
