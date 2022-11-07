import { Movie } from "../../../types/movie";
import { GridCardMyMoviesPage } from "./grid-card-my-movies/GridCardMyMoviesPage";
import "./GridMyMoviesPage.css"

export const GridMyMoviesPage = ({movies}: {movies: Movie[]}) => {
    return (
        <div className="gridMyMoviesPage__container">
              {movies.map(
                (movie: Movie, id: number): JSX.Element => (
                  <GridCardMyMoviesPage movie={movie} key={id} />
                )
              )}
        </div>
      );
}
