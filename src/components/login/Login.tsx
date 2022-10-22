import { STRINGS } from "../../utils/strings";
import "./Login.css";

export const Login = () => {
  return (
    <div className="login__container">
      <div className="login__container--data">
        <div className="logo__login" />

        <input
          className="login__container--data--username"
          type="text"
          placeholder="Username"
        />
        <input
          className="login__container--data--password"
          type="password"
          placeholder="Password"
        />
        <div className="login__container--data--buttons">
          <button className="signIn__button">{STRINGS.signInButton}</button>
          <div className="google__button" />
        </div>

        <span>
          {STRINGS.signUpQuote} <a>{STRINGS.signUpLink}</a>
        </span>
      </div>
    </div>
  );
};
