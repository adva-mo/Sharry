import React, { useState, useRef } from "react";
import "./LoginCard.css";
// import { auth } from "../../utils/database-config";

//todo: user feedbacks

function LoginCard({
  setPasswordToRegister,
  setEmailToRegister,
  isNewUser,
  setIsNewUser,
}) {
  // const [isNewUser, setIsNewUser] = useState(true);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.trim() !== "";
  // const emailIsNotValid = !enteredEmailIsValid && enteredEmailTouched;

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
    setPasswordToRegister(enteredPassword);
    setEmailToRegister(enteredEmail);
  };

  return (
    <>
      <form onSubmit={formSubmissionHandler} className="flex-column login-card">
        <h3>{isNewUser ? "Sign in" : "Login"} and start Sharrying!</h3>
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
        <button className="red-round-btn">
          {isNewUser ? "Sign up" : "Login"}
        </button>
      </form>
      <div>
        <button
          onClick={() => {
            setIsNewUser((prev) => !prev);
          }}
        >
          {isNewUser ? "already have an acount" : "new account"}
        </button>
      </div>
    </>
  );
}
export default LoginCard;
