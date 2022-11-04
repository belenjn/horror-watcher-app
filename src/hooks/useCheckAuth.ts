import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { login, logout } from "../features/auth/authSlice";
import { startLoadingFavoritesMovies } from "../features/movies/thunks/thunks";
import { FirebaseAuth } from "../firebase/config";
import { useAppDispatch, useAppSelector } from "./redux-hooks";

export const useCheckAuth = () => {
    const { status } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      onAuthStateChanged(FirebaseAuth, async (user) => {
        if (!user) return dispatch(logout({}));
  
        const { uid, email, displayName } = user;
  
        dispatch(login({ uid, email, displayName }));
        dispatch(startLoadingFavoritesMovies());
      });
    }, []);

    return {
        status
    }
}
