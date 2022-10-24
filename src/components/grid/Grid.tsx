import { CSSProperties, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ClipLoader } from "react-spinners";
import { fetchGetMovies } from "../../features/thunks/fetchGetMovies";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { Movie } from "../../types/movie";
import { GridCard } from "../grid-card/GridCard";
import "./Grid.css";

export const Grid = () => {
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "#75CA51",
  };

  const moviesLists: Movie[] = useAppSelector((state) => state.movies.movies);

  const handleClickToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    dispatch(fetchGetMovies(page));
  }, [dispatch, page]);

  return (
    <div className="grid__container">
      <button className="top__button" onClick={handleClickToTop}>
        ⌃
      </button>
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
        loader={
          <ClipLoader
            aria-label="Loading..."
            size={200}
            loading={true}
            cssOverride={override}
          />
        }
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
