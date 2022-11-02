import React from "react";
import { useForm } from "../../hooks/useForm";
import { STRINGS } from "../../utils/strings";
import Swal from "sweetalert2";
import "./Register.css";

export const Register = () => {
  const formData = {
    email: "user@gmail.com",
    password: "123456",
    displayName: "User Test",
  };

  const formValidations = {
    email: [(value: string) => value.includes("@"), "The email must have an @"],
    password: [
      (value: string) => value.length >= 6,
      "The password must have 6 characters min",
    ],
    displayName: [
      (value: string) => value.length >= 1,
      "The name is mandatory",
    ],
  };

  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    displayNameValid,
    emailValid,
    passwordValid,
    isFormValid,
  } = useForm(formData, formValidations);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    displayNameValid ? Swal.fire("Oops", displayNameValid, "error") : "";
    passwordValid ? Swal.fire("Oops", passwordValid, "error") : "";
    emailValid ? Swal.fire("Oops", emailValid, "error") : "";
  };

  return (
    <div className="register__container">
      <form onSubmit={onSubmit} className="register__container--data">
        <div className="logo__register" />

        <input
          className="register__container--data--username"
          type="text"
          placeholder="Name"
          name="displayName"
          value={displayName}
          onChange={onInputChange}
        />

        <input
          className="register__container--data--email"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <input
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
