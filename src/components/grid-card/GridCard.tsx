import { Movie } from "../../types/movie";
import "./GridCard.css";

export const GridCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="gridCard__container">
      <div
        className="gridCard__container--poster"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
        }}
      >
        <div className="gridCard__container--poster--icons">
          <div className="pending" />
          <div className="favorite" />
        </div>
        <div className="more-info">Click here for more info</div>

      </div>
    </div>
  );
};
