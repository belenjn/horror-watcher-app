import { useNavigate } from "react-router-dom";
import { STRINGS } from "../../utils/strings";
import "./NotFound.css";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleClickToHomePage = (): void => {
    navigate("/auth/login");
  };
  return (
    <div className="notFound__container">
      <h1 className="notFound__container--title">{STRINGS.notFoundNumber}</h1>
      <h5 className="notFound__container--secondTitle">
        {STRINGS.notFoundText}
      </h5>
      <button
        className="notFound__container--button"
        onClick={handleClickToHomePage}
      >
        {STRINGS.notFoundButton}
      </button>
      <div className="illustrations">
        <div className="casket" />
        <div className="skeleton" />
      </div>
    </div>
  );
};
