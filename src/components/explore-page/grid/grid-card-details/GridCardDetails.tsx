import "./GridCardDetails.css";
import { Movie } from "../../../../types/movie";
import { useNavigate, useParams } from "react-router-dom";
import { STRINGS } from "../../../../utils/strings";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import {
  startAddMovieToFavorites,
  startAddMovieToPending,
} from "../../../../features/movies/thunks/thunks";
import Swal from "sweetalert2";

export const GridCardDetails = ({ movies }: { movies: Movie[] }) => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const movie = movies.find((movie: Movie) => movie.id.toString() === id);

  const favMovies = useAppSelector((state) => state.movies.favoritesMovies);

  const pendMovies = useAppSelector((state) => state.movies.pendingMovies);

  if (!movie) return null;

  const handleClickToHome = () => {
    navigate("/");
  };

  const onClickAddMovieFavorites = () => {
    !favMovies.includes(movie)
      ? Swal.fire("This movie is already saved", " ", "info").then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        })
      : (Swal.fire("Movie saved in Favorites", " ", "success").then(
          (result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          }
        ),
        dispatch(startAddMovieToFavorites(movie)));
  };

  const onClickAddMoviePending = () => {
    !pendMovies.includes(movie)
      ? Swal.fire("This movie is already saved", " ", "info").then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        })
      : (Swal.fire("Movie saved in Pending", " ", "success").then(
          (result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          }
        ),
        dispatch(startAddMovieToPending(movie)));
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
            <button className="pending" onClick={onClickAddMoviePending}>
              {STRINGS.gridCardDetailsPendingButton}
            </button>
            <button className="favorites" onClick={onClickAddMovieFavorites}>
              {STRINGS.gridCardDetailsFavoriteButton}
            </button>
          </div>
          <button className="home" onClick={handleClickToHome}>
            {STRINGS.gridCardDetailsHomeButton}
          </button>
        </div>
      </div>
    </div>
  );
};
