import React, { useMemo } from "react";
import { useForm } from "../../hooks/useForm";
import { STRINGS } from "../../utils/strings";
import Swal from "sweetalert2";
import "./Register.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { startCreatingUserWithEmailPassword } from "../../features/auth/thunks/thunks";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value: string) => value.includes("@"), "The email must have an @"],
  password: [
    (value: string) => value.length >= 6,
    "The password must have 6 characters min",
  ],
  displayName: [(value: string) => value.length >= 1, "The name is mandatory"],
};

export const Register = () => {
  const dispatch = useAppDispatch();

  const { status, errorMessage } = useAppSelector((state) => state.auth);

  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

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

    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <div className="register__container animate__animated animate__fadeIn animate__faster">
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
        <div
          className={
            !!errorMessage ? "register__container--data--alert " : "hidden"
          }
        >
          {errorMessage}
        </div>

        <div className="register__container--data--buttons">
          <button
            disabled={isCheckingAuthentication}
            className="signIn__button"
            type="submit"
          >
            {STRINGS.signUpButton}
          </button>
        </div>
      </form>
    </div>
  );
};
