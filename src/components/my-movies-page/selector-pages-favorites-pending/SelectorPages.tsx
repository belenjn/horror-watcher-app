import { useState } from "react";
import "./SelectorPages.css";

export const SelectorPages = ({
  setFavorites,
  setPending,
}: {
  setFavorites: React.Dispatch<React.SetStateAction<boolean>>;
  setPending: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

  const handleClickFavorites = () => {
    setFavorites(true)
    setPending(false)

  }

  const handleClickPending = () => {
    setPending(true)
    setFavorites(false)

  }

  return (
    <div className="gridMoviesPage__container">
      <div className="gridMoviesPage__container--pages">
        <div className="gridMoviesPage__container--pages--favorites">
          <a onClick={handleClickFavorites}>Favorites</a>
        </div>
        <div className="gridMoviesPage__container--pages--pending">
          <a onClick={handleClickPending}>Pending</a>
        </div>
      </div>
    </div>
  );
};
