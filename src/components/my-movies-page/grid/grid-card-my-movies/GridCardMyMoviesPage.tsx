import { Movie } from "../../../../types/movie";
import { AiOutlineClose, AiOutlineDelete, AiOutlineInfoCircle } from "react-icons/ai";

import "./GridCardMyMoviesPage.css";
import { useAppDispatch } from "../../../../hooks/redux-hooks";
import { startDeletingMovie, startDeletingPendingMovie } from "../../../../features/movies/thunks/thunks";
import Swal from "sweetalert2";
import { useState } from "react";
import { STRINGS } from "../../../../utils/strings";

export const GridCardMyMoviesPage = ({ movie }: { movie: Movie }) => {
  const [infoVisible, setInfoVisible] = useState<boolean>(false);

  const dispatch = useAppDispatch();


  const onDeleteMovie = (): void => {
    Swal.fire({
      icon: "question",
      title: "Do you want to delete this movie?",
      showCancelButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startDeletingMovie(movie.id)), Swal.fire("Deleted!", "", "success");
        dispatch(startDeletingPendingMovie(movie.id)), Swal.fire("Deleted!", "", "success")
      }
    });
  };

  const onInfoVisible = (): void => {
    setInfoVisible(!infoVisible);
  };

  return (
    <>
      <div
        className="gridCardMyMoviesPage__container--poster"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
        }}
      >
        <div
          className={
            infoVisible === true
              ? "gridCardMyMoviesPage__container--info"
              : "hidden"
          }
        >
          <span>
            <b>{STRINGS.gridCardDetailsOverview} </b>
            {movie.overview}
          </span>
        </div>
        <div className="gridCardMyMoviesPage__container--buttons">
         
          <AiOutlineInfoCircle
            className={infoVisible === false ? "info__button" : "hidden"}
            onClick={onInfoVisible}
          />
          <AiOutlineClose className={infoVisible === true ? "delete__button" : "hidden"}  onClick={onInfoVisible}/>
          <AiOutlineDelete className="delete__button" onClick={onDeleteMovie} />
        </div>
      </div>
    </>
  );
};
