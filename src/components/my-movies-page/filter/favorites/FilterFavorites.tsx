import { FaFilter } from "react-icons/fa";
import { filterFavoritesMoviesByNewestDate, filterFavoritesMoviesByOlderDate } from "../../../../features/movies/moviesSlice";
import { useAppDispatch } from "../../../../hooks/redux-hooks";
import "./FilterFavorites.css";

export const FilterFavorites = () => {

  const dispatch = useAppDispatch()

  const onOlderMovies = () => {
    dispatch(filterFavoritesMoviesByOlderDate())
  }

  const onNewestMovies = () => {
    dispatch(filterFavoritesMoviesByNewestDate())
  }

  return (
    <div className="filter__container">
      <FaFilter className="filter__icon" />
      <select className="filter__icon--down" name="Filter">
        <option value="value1" onClick={onOlderMovies}>Older Movies</option>
        <option value="value2" onClick={onNewestMovies}>Newest Movies</option>
      </select>
    </div>
  );
};
