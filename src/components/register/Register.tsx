import { STRINGS } from "../../utils/strings";
import "./Register.css";

export const Register = () => {
  return (
    <div className="register__container">
    <div className="register__container--data">
      <div className="logo__register" />

      <input
        className="register__container--data--username"
        type="text"
        placeholder="Username"
      />
       <input
        className="register__container--data--email"
        type="text"
        placeholder="Email"
      />
      <input
        className="register__container--data--password"
        type="password"
        placeholder="Password"
      />
      <div className="register__container--data--buttons">
        <button className="signIn__button">{STRINGS.signUpButton}</button>
      </div>
    </div>
  </div>
  )
}
