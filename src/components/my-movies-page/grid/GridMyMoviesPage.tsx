import { Movie } from "../../../types/movie";
import { GridCardMyMoviesPage } from "./grid-card-my-movies/GridCardMyMoviesPage";
import "./GridMyMoviesPage.css"

export const GridMyMoviesPage = ({favoritesMovies}: {favoritesMovies: Movie[]}) => {
    return (
        <div className="gridMyMoviesPage__container">
              {favoritesMovies.map(
                (movie: Movie, id: number): JSX.Element => (
                  <GridCardMyMoviesPage movie={movie} key={id} />
                )
              )}
        </div>
      );
}
