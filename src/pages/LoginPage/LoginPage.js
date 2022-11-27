import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import LoginCard from "../../components/LoginCard/LoginCard";
import useAuth from "../../hooks/use-auth";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import Spinner from "../../components/Spinner/Spinner";

function LoginPage() {
  const [isNewUser, setIsNewUser] = useState(true);
  const navigate = useNavigate();

  const [emailToRegister, setEmailToRegister] = useState(null);
  const [passwordToRegister, setPasswordToRegister] = useState(null);

  const { authentication: registerUser } = useAuth(
    emailToRegister,
    passwordToRegister,
    createUserWithEmailAndPassword
  );
  const { authentication: loginUser } = useAuth(
    emailToRegister,
    passwordToRegister,
    signInWithEmailAndPassword
  );

  useEffect(() => {
    if (emailToRegister === null || passwordToRegister === null) return;
    if (isNewUser) registerAndRedirect();
    else loginAndRedirect(); // eslint-disable-next-line
  }, [emailToRegister, passwordToRegister, isNewUser]);

  const loginAndRedirect = async () => {
    try {
      await loginUser();
      navigate("/home");
    } catch (e) {
      navigate("/login");
      console.log(e);
    }
  };
  const registerAndRedirect = async () => {
    try {
      await registerUser();
      navigate("/new-user");
    } catch (e) {
      navigate("/login");
      console.log(e);
    }
  };
  return (
    // <Spinner />
    <div className="login-page">
      <img
        className="login-hero-img"
        src={process.env.PUBLIC_URL + "/assets/login-hero.png"}
        alt=""
      />
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
