import { FaFilter } from "react-icons/fa";
import {
  filterPendingMoviesByNewestDate,
  filterPendingMoviesByOlderDate,
} from "../../../../features/movies/moviesSlice";
import { useAppDispatch } from "../../../../hooks/redux-hooks";
import { STRINGS } from "../../../../utils/strings";
import "../favorites/FilterFavorites.css";

export const FilterPending = () => {
  const dispatch = useAppDispatch();

  const onOlderMovies = () => {
    dispatch(filterPendingMoviesByOlderDate());
  };

  const onNewestMovies = () => {
    dispatch(filterPendingMoviesByNewestDate());
  };

  return (
    <div className="filter__container">
      <FaFilter className="filter__icon" />
      <select className="filter__icon--down" name="Filter">
        <option value="value1" onClick={onOlderMovies}>
          {STRINGS.olderMovies}
        </option>
        <option value="value2" onClick={onNewestMovies}>
          {STRINGS.newestMovies}
        </option>
      </select>
    </div>
  );
};
