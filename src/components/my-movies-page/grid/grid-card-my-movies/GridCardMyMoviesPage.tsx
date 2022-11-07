import { Movie } from "../../../../types/movie";
import { AiOutlineDelete, AiOutlineInfoCircle } from "react-icons/ai";

import "./GridCardMyMoviesPage.css";
import { useAppDispatch } from "../../../../hooks/redux-hooks";
import { startDeletingMovie } from "../../../../features/movies/thunks/thunks";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const GridCardMyMoviesPage = ({ movie }: { movie: Movie }) => {
  const dispatch = useAppDispatch();


  const onDeleteMovie = () => {
    Swal.fire({
      icon: "question",
      title: "Do you want to delete this movie?",
      showCancelButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startDeletingMovie()), 
        Swal.fire("Deleted!", "", "success")
      }
    });
  };
  return (
    <>
      <div
        className="gridCardMyMoviesPage__container--poster"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
        }}
      >
        <div className="gridCardMyMoviesPage__container--buttons">
          <AiOutlineInfoCircle className="info__button" />
          <AiOutlineDelete className="delete__button" onClick={onDeleteMovie}/>
        </div>
      </div>
    </>
  );
};
