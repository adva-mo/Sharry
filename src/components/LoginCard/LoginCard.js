import React from "react";
import "./LoginCard.css";
import useInput from "../../hooks/use-input";
//todo: display errors

const isEmailInputValid = (value) => value.trim() !== "" && value.includes("@");
const isPasswordInputValid = (value) =>
  value.trim() !== "" && value.length >= 6;
// const isPasswordConfirmed = (password1, password2) => password1 === password2;

function Logincard({
  setPasswordToRegister,
  setEmailToRegister,
  setConfirmedPssword,
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

  const {
    value: confirmedPasswordValue,
    isTouched,
    valueChangeHandler: confirmedpasswordChangeHandler,
    inputBlurHandler: confirmedpasswordBlurHandler,
    reset: resetConfirmedPassword,
  } = useInput(isPasswordInputValid);

  const confirmedPasswordHasError =
    isTouched && confirmedPasswordValue !== passwordValue;

  if (confirmedPasswordHasError) console.log("kkk");
  const emailClasses = emailHasError
    ? "error-class and bottom-border"
    : "bottom-border";
  const passwordClasses = passwordHasError
    ? "error-class and bottom-border"
    : "bottom-border";
  const confirmedPasswordClasses = confirmedPasswordHasError
    ? "error-class and bottom-border"
    : "bottom-border";

  let isFormValid = false;

  // if (isEmailValid && isPasswordValid && !confirmedPasswordHasError) {
  //   isFormValid = true;
  // }
  // if (isNewUser) {
  //   if (isEmailValid && isPasswordValid && !confirmedPasswordHasError) {
  //     isFormValid = true;
  //   }
  // } else {
  //   if (isEmailValid && isPasswordValid) {
  //     isFormValid = true;
  //   }
  // }
  if (isEmailValid && isPasswordValid) {
    if (isNewUser) {
      if (!confirmedPasswordHasError) isFormValid = true;
    } else isFormValid = true;
  }
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setEmailToRegister(emailValue);
    setPasswordToRegister(passwordValue);
    setConfirmedPssword(confirmedPasswordValue);
    resetEmail();
    resetPassword();
    resetConfirmedPassword();
  };

  return (
    <>
      <form onSubmit={formSubmissionHandler} className="flex-column login-card">
        <h3>{isNewUser ? "Sign up" : "Sign in"} and start Sharrying!</h3>
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
          <p className="error-text">
            please enter a valid email
            <br />
            for example: example@example.com
          </p>
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
          <p className="error-text">password must contain at least 6 digits</p>
        )}
        {isNewUser && (
          <>
            <label htmlFor="confirmedPassword">password</label>
            <input
              className={confirmedPasswordClasses}
              placeholder="repeat your password"
              type="password"
              name="confirmedPassword"
              value={confirmedPasswordValue}
              onChange={confirmedpasswordChangeHandler}
              onBlur={confirmedpasswordBlurHandler}
            />
            {confirmedPasswordHasError && (
              <p className="error-text">password must be the same</p>
            )}
          </>
        )}

        <button disabled={!isFormValid} className="red-round-btn">
          {isNewUser ? "Sign up" : "Login"}
        </button>
        <button
          type="button"
          className="blue-btn"
          onClick={() => {
            setIsNewUser((prev) => !prev);
            setPasswordToRegister(null);
            setEmailToRegister(null);
          }}
        >
          {isNewUser ? "Already have an account? SIGN IN" : "new account"}
        </button>
      </form>
    </>
  );
}
export default Logincard;
