import { useNavigate } from "react-router-dom";
import { Movie } from "../../types/movie";
import "./GridCard.css";

export const GridCard = ({ movie }: { movie: Movie }) => {

  const navigate = useNavigate()

  const handleClickToMoreInfo = (id: number) => {
    navigate(`/detail/${id}`)
  }

  return (
    <>
      <div
        className="gridCard__container--poster"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
        }}
      >
        <div className="more-info">Click here for more info</div>
      </div>
    </>
  );
};