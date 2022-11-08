import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { startLogout } from "../../features/auth/thunks/thunks";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { STRINGS } from "../../utils/strings";
import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onLogout = (): void => {
    dispatch(startLogout());  
  };

  const handleClickHamburger = (): void => {
    setIsOpen(true);
  };

  const handleClickCross = (): void => {
    setIsOpen(false);
  };

  const handleClickExplore = (): void => {
    navigate("/");
  };

  const handleClickMyMovies = (): void => {
    navigate("/myMovies");
    location.reload();
  };

  return (
    <>
      <div className="navbar__container">
        <div className="logo__navbar" onClick={handleClickExplore} />
        <div className="navbar__container--menu">
          <span className="first__option" onClick={handleClickMyMovies}>
            {STRINGS.navbarMovies}
          </span>
          <span className="second__option" onClick={handleClickExplore}>
            {STRINGS.navbarExplore}
          </span>
          <div className="logout" onClick={onLogout} />
          <div
            className={isOpen === true ? "hidden" : "hamburger"}
            onClick={handleClickHamburger}
          />
          <div
            className={isOpen === true ? "cross" : "hidden"}
            onClick={handleClickCross}
          />
        </div>
      </div>
      <div className={isOpen === true ? "cross__menu" : "hidden"}>
        <span className="first__option--mobile" onClick={handleClickMyMovies}>{STRINGS.navbarMovies}</span>
        <span className="second__option--mobile" onClick={handleClickExplore}>{STRINGS.navbarExplore}</span>
        <button className="logOut__button" onClick={onLogout}>
          {STRINGS.navbarLogout}
        </button>
      </div>
    </>
  );
};
