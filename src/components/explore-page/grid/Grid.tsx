import { ChangeEvent, CSSProperties, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ClipLoader } from "react-spinners";
import { fetchGetMovies } from "../../../features/movies/thunks/fetchGetMovies";
import { useAppDispatch } from "../../../hooks/redux-hooks";
import useDebounce from "../../../hooks/useDebounce";
import { Movie } from "../../../types/movie";
import { GridCard } from "./grid-card/GridCard";
import "./Grid.css";

export const Grid = ({ movies }: { movies: Movie[] }) => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const debouncedValue = useDebounce<string>(search, 500);

  const dispatch = useAppDispatch();

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "#75CA51",
  };

  const handleClickToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  function filterMovie() {
    if (search.length) {
      const newArray = movies.filter((movie) => {
        return JSON.stringify(movie.title)
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      });
      return newArray;
    } else {
      return movies;
    }
  }

  const moviesFiltered = filterMovie();

  useEffect(() => {
    dispatch(fetchGetMovies(page));
  }, [dispatch, page, debouncedValue]);

  return (
    <div className="grid__container">
      <button className="top__button" onClick={handleClickToTop}>
        ⌃
      </button>
      <div className="grid__container--input">
        <div className="grid__input--image" />
        <input
          onChange={handleChange}
          className="grid__input"
          type="text"
          value={search}
        />
      </div>

      <InfiniteScroll
        dataLength={movies.length}
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
          {moviesFiltered.map(
            (movie: Movie, id: number): JSX.Element => (
              <GridCard movie={movie} key={id} />
            )
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};
