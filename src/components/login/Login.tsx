import { FormEvent } from "react";
import { useForm } from "../../hooks/useForm";
import { STRINGS } from "../../utils/strings";
import "./Login.css";

export const Login = () => {
  const { email, password, onInputChange } = useForm({
    email: "user@gmail.com",
    password: "123456",
  });

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log({email, password})
  }

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
          <button className="signIn__button" type="submit">{STRINGS.signInButton}</button>
          <div className="google__button" />
        </div>

        <span>
          {STRINGS.signUpQuote} <a>{STRINGS.signUpLink}</a>
        </span>
      </form>
    </div>
  );
};
