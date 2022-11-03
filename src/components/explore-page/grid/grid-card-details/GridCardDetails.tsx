import "./GridCardDetails.css";
import { Movie } from "../../../../types/movie";
import { useNavigate, useParams } from "react-router-dom";
import { STRINGS } from "../../../../utils/strings";

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
            <b>{STRINGS.gridCardDetailsReleaseDate} </b>
            {movie.release_date}
          </span>
          <span>
            <b>{STRINGS.gridCardDetailsOriginalLanguage} </b>
            {movie.original_language.toLocaleUpperCase()}
          </span>

          <span>
            <b>{STRINGS.gridCardDetailsVote} </b>
            {movie.vote_average}
          </span>

          <span>
            <b>{STRINGS.gridCardDetailsOverview} </b>
            {movie.overview}
          </span>

          <div className="gridCardDetails__buttons">
            <button className="pending">{STRINGS.gridCardDetailsPendingButton}</button>
            <button className="favorites">{STRINGS.gridCardDetailsFavoriteButton}</button>
          </div>
          <button className="home" onClick={handleClickToHome}>{STRINGS.gridCardDetailsHomeButton}</button>

        </div>
      </div>
    </div>
  );
};
