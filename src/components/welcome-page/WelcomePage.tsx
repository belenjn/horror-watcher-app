import { STRINGS } from "../../utils/strings";
import "./WelcomePage.css";

export const WelcomePage = () => {
  return (
    <div className="welcomePage__container">
      <div className="webs__container">
        <div className="web__left" />
        <div className="web__right" />
      </div>
      <div className="logo" />
      <h1>{STRINGS.welcomePageTitle}</h1>
      <button>{STRINGS.welcomePageButton}</button>
    </div>
  );
};
