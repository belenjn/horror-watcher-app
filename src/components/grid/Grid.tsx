import { useEffect } from "react";
import { fetchGetMovies } from "../../features/thunks/fetchGetMovies";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { Movie } from "../../types/movie";
import { GridCard } from "../grid-card/GridCard";
import "./Grid.css";

export const Grid = () => {
  const dispatch = useAppDispatch();

  const moviesLists: Movie[] = useAppSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(fetchGetMovies());
  }, [dispatch]);

  return (
    <div className="grid__container">
      <div className="grid__container--input">
        <div className="grid__input--image" />
        <input
          className="grid__input"
          type="text"
          placeholder="Search by title, year..."
        />
      </div>

      <div className="grid__container--items">
        {moviesLists.map(
          (movie: Movie): JSX.Element => (
            <GridCard movie={movie} key={movie.id} />
          )
        )}
      </div>
    </div>
  );
};
