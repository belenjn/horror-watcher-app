import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ExplorePage } from "./components/explore-page/ExplorePage";
import { GridCardDetails } from "./components/explore-page/grid/grid-card-details/GridCardDetails";
import { Login } from "./components/login/Login";
import { MyMoviesPage } from "./components/my-movies-page/MyMoviesPage";
import { NotFound } from "./components/not-found/NotFound";
import { Register } from "./components/register/Register";
import { WelcomePage } from "./components/welcome-page/WelcomePage";
import { useAppSelector } from "./hooks/redux-hooks";
import { AuthRoutes } from "./routes/auth/AuthRoutes";
import { MoviesRoutes } from "./routes/movies/MoviesRoutes";
import { Movie } from "./types/movie";

function App() {
  const moviesLists: Movie[] = useAppSelector((state) => state.movies.movies);

  const { status } = useAppSelector((state) => state.auth);

  if (status === "checking") {
    <WelcomePage />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {status === "authenticated" ? (
            <Route path="/*" element={<MoviesRoutes movies={moviesLists} />} />
          ) : (
            <Route path="/auth/*" element={<AuthRoutes />} />
          )}

          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
          {/* <Route path="/myMovies" element={<MyMoviesPage />} /> */}
          {/* <Route
            path="/movies/:id"
            element={<GridCardDetails movies={moviesLists} />}
          /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
