import { Movie } from "../../../types/movie";
import { GridCard } from "../../explore-page/grid/grid-card/GridCard";
import "./GridMyMoviesPage.css"

export const GridMyMoviesPage = ({favoritesMovies}: {favoritesMovies: Movie[]}) => {
    return (
        <div className="gridMyMoviesPage__container">
              {favoritesMovies.map(
                (movie: Movie, id: number): JSX.Element => (
                  <GridCard movie={movie} key={id} />
                )
              )}
        </div>
      );
}
