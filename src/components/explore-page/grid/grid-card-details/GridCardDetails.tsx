import "./GridCardDetails.css";
import { Movie } from "../../../../types/movie";
import { useNavigate, useParams } from "react-router-dom";

export const GridCardDetails = ({ movies }: { movies: Movie[] }) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const movie = movies.find((movie: Movie) => movie.id.toString() === id);

  if (!movie) return null;

  const handleClickToHome = () => {
    navigate("/");
  };

  return (
    <div className="gridCardDetails__container animate__animated animate__fadeIn animate__faster">
      {/* <div className="gridCardDetails__cross" onClick={handleClickToHome} /> */}
      <h1 className="gridCardDetails__title">{movie.title}</h1>
      <div className="gridCardDetails__container--movie">
        <div
          className="gridCardDetails__container--movie--image"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
          }}
        />
        <div className="gridCardDetails__container--movie--text">
          <span>
            <b>Release date: </b>
            {movie.release_date}
          </span>
          <span>
            <b>Original Language: </b>
            {movie.original_language.toLocaleUpperCase()}
          </span>

          <span>
            <b>Vote: </b>
            {movie.vote_average}
          </span>

          <span>
            <b>Overview: </b>
            {movie.overview}
          </span>

          <div className="gridCardDetails__buttons">
            <button className="pending">Add to pending</button>
            <button className="favorites">Add to favorites</button>
          </div>
          <button className="home" onClick={handleClickToHome}>Back to home</button>

        </div>
      </div>
    </div>
  );
};
