import { AnyAction, Dispatch, ThunkDispatch } from "@reduxjs/toolkit";
import { signInWithGoogle } from "../../../firebase/providers";
import { StateOfMovies } from "../../moviesSlice";
import { checkingCredentials, StateOfAuth } from "../authSlice";

export const checkingAuthentication = (email: string | undefined, password: string | undefined) => {
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
    dispatch(checkingCredentials())
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

      console.log({result})
    };
  };
  
