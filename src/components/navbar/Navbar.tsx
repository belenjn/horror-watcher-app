import { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickHamburger = (): void => {
    setIsOpen(true);
  };

  const handleClickCross = (): void => {
    setIsOpen(false);
  };

  return (<>
  <div className="navbar__container">
      <div className="logo__navbar" />
      <div className="navbar__container--menu">
        <span className="first__option">My movies</span>
        <span className="second__option">Explore</span>
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
