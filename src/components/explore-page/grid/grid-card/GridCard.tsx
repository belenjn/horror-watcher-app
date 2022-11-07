import { Link } from "react-router-dom";
import { Movie } from "../../../../types/movie";
import { STRINGS } from "../../../../utils/strings";
import "./GridCard.css";

export const GridCard = ({ movie }: { movie: Movie}) => {


  return (
    <>
      <div
        className="gridCard__container--poster"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
        }}
      >
        <Link className="more-info" to={`/movies/${movie.id}`}>
          {STRINGS.gridCardLink}
        </Link>
      </div>
    </>
  );
};
