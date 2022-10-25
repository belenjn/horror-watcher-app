import { CSSProperties, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ClipLoader } from "react-spinners";
import { fetchGetMovies } from "../../features/thunks/fetchGetMovies";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { Movie } from "../../types/movie";
import { GridCard } from "./grid-card/GridCard";
import "./Grid.css";

export const Grid = ({ movies }: { movies: Movie[] }) => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

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
  }, [dispatch, page]);

  return (
    <div className="grid__container">
      <form
        onSubmit={(e): void => {
          e.preventDefault();
          setSearch("");
        }}
      >
        <button className="top__button" onClick={handleClickToTop}>
          ⌃
        </button>
        <div className="grid__container--input">
          <div className="grid__input--image" />
          <input
            onChange={(e): void => setSearch(e.target.value)}
            className="grid__input"
            type="text"
            placeholder="Search by title, year..."
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
      </form>
    </div>
  );
};
