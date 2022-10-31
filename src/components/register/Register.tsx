import React from "react";
import { useForm } from "../../hooks/useForm";
import { STRINGS } from "../../utils/strings";
import "./Register.css";

export const Register = () => {
  const formData = {
    email: "user@gmail.com",
    password: "123456",
    displayName: "User Test",
  };

  const { displayName, email, password, onInputChange, formState } =
    useForm(formData);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

//TODO: hacer validacion de los inputs segun si su valor cumple con el min length y sino que arroje error

  return (
    <div className="register__container">
      <form onSubmit={onSubmit} className="register__container--data">
        <div className="logo__register" />

        <input
          required
          minLength={10}
          className="register__container--data--username"
          type="text"
          placeholder="Name"
          name="displayName"
          value={displayName}
          onChange={onInputChange}
        />
        <input
          required
          className="register__container--data--email"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <input
          required
          minLength={6}
          className="register__container--data--password"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onInputChange}
        />
        <div className="register__container--data--buttons">
          <button className="signIn__button" type="submit">
            {STRINGS.signUpButton}
          </button>
        </div>
      </form>
    </div>
  );
};
