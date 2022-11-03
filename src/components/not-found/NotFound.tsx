import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleClickToHomePage = (): void => {
    navigate("/auth/login");
  };
  return (
    <div className="notFound__container">
      <h1 className="notFound__container--title">404</h1>
      <h5 className="notFound__container--secondTitle">
        We couldn’t find this page
      </h5>
      <button
        className="notFound__container--button"
        onClick={handleClickToHomePage}
      >
        Exit
      </button>
      <div className="illustrations">
        <div className="casket" />
        <div className="skeleton" />
      </div>
    </div>
  );
};
