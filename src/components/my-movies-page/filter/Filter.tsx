import { FaFilter } from "react-icons/fa";
import "./Filter.css";

export const Filter = () => {
  return (
    <div className="filter__container">
      <FaFilter className="filter__icon" />
      <select className="filter__icon--down" name="Filter">
        <option value="value1">Older Movies</option>
        <option value="value2">Newest Movies</option>
      </select>
    </div>
  );
};
