import { STRINGS } from "../../../utils/strings";
import "./SelectorPages.css";

export const SelectorPages = ({
  favorites,
  pending,
  setFavorites,
  setPending,
}: {
  favorites: boolean,
  pending: boolean,
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
          <a className={favorites === true ? "active" : "no-active"} onClick={handleClickFavorites}>{STRINGS.favoritesTitle}</a>
        </div>
        <div className="gridMoviesPage__container--pages--pending">
          <a className={pending === true ? "active" : "no-active"} onClick={handleClickPending}>{STRINGS.pendingTitle}</a>
        </div>
      </div>
    </div>
  );
};
