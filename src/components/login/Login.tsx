import { FormEvent, useMemo } from "react";
import {
  checkingAuthentication,
  startGoogleSignIn,
} from "../../features/auth/thunks/thunks";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useForm } from "../../hooks/useForm";
import { STRINGS } from "../../utils/strings";
import "./Login.css";

export const Login = () => {
  const dispatch = useAppDispatch();

  const { status } = useAppSelector((state) => state.auth);

  const { email, password, onInputChange } = useForm({
    email: "user@gmail.com",
    password: "123456",
  });

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(checkingAuthentication(email, password));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  const isAuthenticating = useMemo(() => status === "checking", [status]);

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
          <button 
          type="submit" 
          className="signIn__button"
          disabled={isAuthenticating}
          >
            {STRINGS.signInButton}
          </button>
          <button
            type="button"
            className="google__button"
            onClick={onGoogleSignIn}
            disabled={isAuthenticating}
          />
        </div>

        <span>
          {STRINGS.signUpQuote} <a>{STRINGS.signUpLink}</a>
        </span>
      </form>
    </div>
  );
};
