import { FormEvent, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../features/auth/thunks/thunks";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useForm } from "../../hooks/useForm";
import { STRINGS } from "../../utils/strings";
import "./Login.css";

export const Login = () => {
  const dispatch = useAppDispatch();

  const { status, errorMessage } = useAppSelector((state) => state.auth);


  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  }, {});

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({email, password}));
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
          <div
          className={
            !!errorMessage ? "register__container--data--alert " : "hidden"
          }
        >
          {errorMessage}
        </div>
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
          {STRINGS.signUpQuote} <Link to="/auth/register">{STRINGS.signUpLink}</Link>
        </span>
      </form>
    </div>
  );
};
