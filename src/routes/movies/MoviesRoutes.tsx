import { Navigate, Route, Routes } from "react-router-dom";
import { ExplorePage } from "../../components/explore-page/ExplorePage";
import { GridCardDetails } from "../../components/explore-page/grid/grid-card-details/GridCardDetails";
import { MyMoviesPage } from "../../components/my-movies-page/MyMoviesPage";
import { Movie } from "../../types/movie";

export const MoviesRoutes = ({ movies }: { movies: Movie[] }) => {
  return (
    <Routes>
      <Route path="/" element={<ExplorePage movies={movies} />} />
      <Route path="/*" element={<Navigate to="/" />} />
      <Route path="/movies/:id" element={<GridCardDetails movies={movies} />} />
      <Route path="/myMovies" element={<MyMoviesPage />} />
    </Routes>
  );
};
