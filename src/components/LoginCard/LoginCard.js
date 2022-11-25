import React from "react";
import "./LoginCard.css";
import useInput from "../../hooks/use-input";
//todo: user feedbacks

const isEmailInputValid = (value) => value.trim() !== "" && value.includes("@");
const isPasswordInputValid = (value) =>
  value.trim() !== "" && value.length >= 6;

function Logincard({
  setPasswordToRegister,
  setEmailToRegister,
  isNewUser,
  setIsNewUser,
}) {
  const {
    value: emailValue,
    isValid: isEmailValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHndler,
    reset: resetEmail,
  } = useInput(isEmailInputValid);

  const {
    value: passwordValue,
    isValid: isPasswordValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isPasswordInputValid);

  const emailClasses = emailHasError
    ? "error-class and bottom-border"
    : "bottom-border";
  const passwordClasses = passwordHasError
    ? "error-class and bottom-border"
    : "bottom-border";
  let isFormValid = false;

  if (isEmailValid && isPasswordValid) {
    isFormValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!isFormValid) return;
    console.log("submitted");
    console.log(emailValue, passwordValue);
    resetEmail();
    resetPassword();
    setPasswordToRegister(passwordValue);
    setEmailToRegister(emailValue);
  };

  return (
    <>
      <form onSubmit={formSubmissionHandler} className="flex-column login-card">
        <h3>{isNewUser ? "Sign in" : "Login"} and start Sharrying!</h3>
        <label htmlFor="email">email</label>
        <input
          className={emailClasses}
          placeholder="enter your email"
          type="email"
          name="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHndler}
        />
        {emailHasError && (
          <p>please enter a valid email, for example: example@example.com</p>
        )}
        <label htmlFor="password">password</label>
        <input
          className={passwordClasses}
          placeholder="enter your password"
          type="password"
          name="password"
          value={passwordValue}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
        {passwordHasError && (
          <p>
            please enter a valid password, must contain at least 6 characters
          </p>
        )}

        <button disabled={!isFormValid} className="red-round-btn">
          {isNewUser ? "Sign up" : "Login"}
        </button>
        <button
          type="button"
          className="red-round-btn"
          onClick={() => {
            setIsNewUser((prev) => !prev);
            setPasswordToRegister(null);
            setEmailToRegister(null);
          }}
        >
          {isNewUser ? "already have an account" : "new account"}
        </button>
      </form>
    </>
  );
}
export default Logincard;
