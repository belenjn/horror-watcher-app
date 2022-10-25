import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleClickHamburger = (): void => {
    setIsOpen(true);
  };

  const handleClickCross = (): void => {
    setIsOpen(false);
  };

  const handleClickExplore = ():void => {
    navigate("/")
  }

  const handleClickMyMovies = ():void => {
    navigate("/myMovies")
  }

  return (<>
  <div className="navbar__container">
      <div className="logo__navbar" />
      <div className="navbar__container--menu">
        <span className="first__option" onClick={handleClickMyMovies}>My movies</span>
        <span className="second__option" onClick={handleClickExplore}>Explore</span>
        <div className="logout" />
        <div
          className={
            isOpen === true ? "hidden" : "hamburger"
          }
          onClick={handleClickHamburger}
        />
        <div
          className={
            isOpen === true ? "cross" : "hidden"
          }
          onClick={handleClickCross}
        />
       
      </div>
    </div>
    <div className={
            isOpen === true ? "cross__menu" : "hidden"
          }>
        <span className="first__option--mobile">My movies</span>
        <span className="second__option--mobile">Explore</span>
        <button className="logOut__button">Log out</button>
        </div>
  </>
    
  );
};
