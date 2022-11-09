import { Link, useNavigate } from "react-router-dom";
import { Movie } from "../../../../types/movie";
import { STRINGS } from "../../../../utils/strings";
import "./GridCard.css";

export const GridCard = ({ movie }: { movie: Movie}) => {

  const navigate = useNavigate();

  const onMovieDetails = () => {
    navigate(`/movies/${movie.id}`)
  }

  return (
    <>
    
      <div
        className="gridCard__container--poster"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
        }}
        onClick={onMovieDetails}
      >
        <Link className="more-info" to={`/movies/${movie.id}`}>
          {STRINGS.gridCardLink}
        </Link>
      </div>
    </>
  );
};
