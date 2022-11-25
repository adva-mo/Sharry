import React, { useState, useRef } from "react";
import "./LoginCard.css";

//todo: user feedbacks

function LoginCard() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.trim() !== "";
  const emailIsNotValid = !enteredEmailIsValid && enteredEmailTouched;

  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(false);
  //   const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  //   const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const emailInputChangeHandler = ({ target }) => {
    setEnteredEmail(target.value);
  };
  const passwordInputChangeHandler = ({ target }) => {
    setEnteredPassword(target.value);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setEnteredEmailTouched(true);
    // setEnteredPasswordTouched(true);
    if (!enteredEmailIsValid) return;
    // }
    setEnteredEmail("");
    if (enteredPassword.trim() === "" || enteredPassword.length < 6) {
      setEnteredPasswordIsValid(false);
      console.log("password not valid");
      return;
    }
    // setEnteredPasswordIsValid(true);
    emailRef.current.value = "";
    passwordRef.current.value = "";

    console.log(`enteredEmail: ${enteredEmail}`);
    console.log(`enteredPassword: ${enteredPassword}`);
  };

  return (
    <form onSubmit={formSubmissionHandler} className="flex-column login-card">
      <h3>Login and start Sharrying!</h3>
      <label htmlFor="email">email</label>
      <input
        ref={emailRef}
        className={"bottom-border"}
        placeholder="enter your email"
        type="email"
        name="email"
        onChange={emailInputChangeHandler}
      />
      {/* {!enteredEmailIsValid && enteredEmailTouched && (
        // <p className="error-text">EMAIL MUST NOT BE EMPTY</p>
      )} */}
      <label htmlFor="password">password</label>
      <input
        className={"bottom-border"}
        ref={passwordRef}
        placeholder="enter your password"
        type="password"
        name="password"
        onChange={passwordInputChangeHandler}
      />
      {/* {!enteredPasswordIsValid && enteredPasswordTouched && (
        <p className="error-text">PASSWORD MUST NOT BE EMPTY</p>
      )} */}
      <button className="red-round-btn">Log in</button>
    </form>
  );
}
export default LoginCard;
