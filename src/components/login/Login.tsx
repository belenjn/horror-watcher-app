import { FormEvent } from "react";
import { checkingAuthentication } from "../../features/auth/thunks/thunks";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { useForm } from "../../hooks/useForm";
import { STRINGS } from "../../utils/strings";
import "./Login.css";

export const Login = () => {
  const dispatch = useAppDispatch();

  const { email, password, onInputChange } = useForm({
    email: "user@gmail.com",
    password: "123456",
  });

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(checkingAuthentication(email, password));
  };

  const onGoogleSignIn = () => {
    console.log("on google sign in");
  };

  return (
    <div className="login__container">
      <form className="login__container--data" onSubmit={onSubmit}>
        <div className="logo__login" />

        <input
          className="login__container--data--username"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <input
          className="login__container--data--password"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onInputChange}
        />
        <div className="login__container--data--buttons">
          <button type="submit" className="signIn__button">
            {STRINGS.signInButton}
          </button>
          <button
            type="button"
            className="google__button"
            onClick={onGoogleSignIn}
          />
        </div>

        <span>
          {STRINGS.signUpQuote} <a>{STRINGS.signUpLink}</a>
        </span>
      </form>
    </div>
  );
};
