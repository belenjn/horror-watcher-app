import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/not-found/NotFound";
import { CheckAuth } from "./components/ui/CheckAuth";
import { WelcomePage } from "./components/welcome-page/WelcomePage";
import { login, logout } from "./features/auth/authSlice";
import { FirebaseAuth } from "./firebase/config";
import { useAppDispatch, useAppSelector } from "./hooks/redux-hooks";
import { AuthRoutes } from "./routes/auth/AuthRoutes";
import { MoviesRoutes } from "./routes/movies/MoviesRoutes";
import { Movie } from "./types/movie";

function App() {
  const moviesLists: Movie[] = useAppSelector((state) => state.movies.movies);

  const { status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout({}));

      const { uid, email, displayName } = user;

      dispatch(login({ uid, email, displayName }));
    });
  }, []);

  if (status === "checking") {
    <CheckAuth/>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/welcome" element={<WelcomePage />} />
          {status === "authenticated" ? (
            <Route path="/*" element={<MoviesRoutes movies={moviesLists} />} />
          ) : (
            <Route path="/auth/*" element={<AuthRoutes />} />
          )}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
