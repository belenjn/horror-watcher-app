import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ExplorePage } from "./components/explore-page/ExplorePage";
import { GridCardDetails } from "./components/explore-page/grid/grid-card-details/GridCardDetails";
import { Login } from "./components/login/Login";
import { MyMoviesPage } from "./components/my-movies-page/MyMoviesPage";
import { NotFound } from "./components/not-found/NotFound";
import { Register } from "./components/register/Register";
import { WelcomePage } from "./components/welcome-page/WelcomePage";
import { useAppSelector } from "./hooks/redux-hooks";
import { Movie } from "./types/movie";

function App() {
  const moviesLists: Movie[] = useAppSelector((state) => state.movies.movies);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ExplorePage movies={moviesLists} />} />
          <Route path="/myMovies" element={<MyMoviesPage />} />
          <Route
            path="/movies/:id"
            element={<GridCardDetails movies={moviesLists} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
