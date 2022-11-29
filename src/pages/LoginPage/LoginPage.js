import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import LoginCard from "../../components/LoginCard/LoginCard";
import useAuth from "../../hooks/use-auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import Spinner from "../../components/Spinner/Spinner";

function LoginPage() {
  const [isNewUser, setIsNewUser] = useState(true);

  const [emailToRegister, setEmailToRegister] = useState(null);
  const [passwordToRegister, setPasswordToRegister] = useState(null);

  const {
    authentication: registerUser,
    isLoading: isResigtering,
    error: registerError,
  } = useAuth(
    emailToRegister,
    passwordToRegister,
    createUserWithEmailAndPassword
  );
  const {
    authentication: loginUser,
    isLoading: isLogin,
    error: LoginError,
  } = useAuth(emailToRegister, passwordToRegister, signInWithEmailAndPassword);

  useEffect(() => {
    if (emailToRegister === null || passwordToRegister === null) return;
    if (isNewUser) registerAndRedirect();
    else loginAndRedirect(); // eslint-disable-next-line
  }, [emailToRegister, passwordToRegister, isNewUser]);

  const loginAndRedirect = async () => {
    try {
      await loginUser();
    } catch (e) {
      console.log(e);
    }
  };
  const registerAndRedirect = async () => {
    try {
      await registerUser();
    } catch (e) {
      console.log(e);
    }
  };
  if (isLogin || isResigtering) return <Spinner />;
  return (
    <div className="login-page">
      <img
        className="login-hero-img"
        src={process.env.PUBLIC_URL + "/assets/login-hero.png"}
        alt=""
      />
      {registerError && <p>{"email is already in use"}</p>}
      {LoginError && <p>{"incorrect password"}</p>}
      <LoginCard
        setEmailToRegister={setEmailToRegister}
        setPasswordToRegister={setPasswordToRegister}
        isNewUser={isNewUser}
        setIsNewUser={setIsNewUser}
      />
    </div>
  );
}

export default LoginPage;
