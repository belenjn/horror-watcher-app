import "./WelcomePage.css";

export const WelcomePage = () => {
  return (
    <div className="welcomePage__container">
      <div className="webs__container">
        <div className="web__left" />
        <div className="web__right" />
      </div>
      <div className="logo" />
      <h1>Your favorites horror movies at one click </h1>
      <button>Let's go!</button>
    </div>
  );
};
