import { GridCard } from "../grid-card/GridCard";
import "./Grid.css";

export const Grid = () => {
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

      <div className="grid__container--items">
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
      </div>
    </div>
  );
};
