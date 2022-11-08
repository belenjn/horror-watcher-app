import { Movie } from "../../../types/movie";
import { FilterPending } from "../filter/pending/FilterPending";
import { GridMyMoviesPage } from "../grid/GridMyMoviesPage";
import "./Pending.css";

export const Pending = ({ pendingMovies }: { pendingMovies: Movie[] }) => {
  return (
    <div className="pending__container animate__animated animate__fadeIn animate__faster">
      <h1 className="pending__container--title">Pending</h1>
      <FilterPending />
      <div className="pending__container--grid">
        {pendingMovies.length === 0 ? (
          <h1
            style={{
              height: 500,
            }}
          >
            No movies yet :(
          </h1>
        ) : (
          <GridMyMoviesPage movies={pendingMovies} />
        )}
      </div>
    </div>
  );
};
