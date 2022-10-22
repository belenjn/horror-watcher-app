import { useNavigate } from "react-router-dom";
import { STRINGS } from "../../utils/strings";
import "./WelcomePage.css";

export const WelcomePage = () => {

  const navigate = useNavigate();

  const handleClickToHomePage = ():void => {
    navigate("/")
  }

  return (
    <div className="welcomePage__container">
      <div className="webs__container">
        <div className="web__left" />
        <div className="web__right" />
      </div>
      <div className="logo__welcome" />
      <h1>{STRINGS.welcomePageTitle}</h1>
      <button className="home__button" onClick={handleClickToHomePage}>{STRINGS.welcomePageButton}</button>
    </div>
  );
};
