import { FaFilter } from "react-icons/fa";
import { filterFavoritesMoviesByNewestDate, filterFavoritesMoviesByOlderDate } from "../../../../features/movies/moviesSlice";
import { useAppDispatch } from "../../../../hooks/redux-hooks";
import { STRINGS } from "../../../../utils/strings";
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
        <option value="value1" onClick={onOlderMovies}>{STRINGS.olderMovies}</option>
        <option value="value2" onClick={onNewestMovies}>{STRINGS.newestMovies}</option>
      </select>
    </div>
  );
};
