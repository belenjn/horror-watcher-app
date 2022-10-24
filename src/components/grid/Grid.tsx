import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchGetMovies } from "../../features/thunks/fetchGetMovies";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { Movie } from "../../types/movie";
import { GridCard } from "../grid-card/GridCard";
import "./Grid.css";

export const Grid = () => {
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();

  const moviesLists: Movie[] = useAppSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(fetchGetMovies(page));
  }, [dispatch, page]);

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

      <InfiniteScroll
        dataLength={moviesLists.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={<span>You have seen it all!</span>}
      >
        <div className="grid__container--items">
          {moviesLists.map(
            (movie: Movie): JSX.Element => (
              <GridCard movie={movie} key={movie.id} />
            )
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};
