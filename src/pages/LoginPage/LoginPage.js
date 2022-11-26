import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import LoginCard from "../../components/LoginCard/LoginCard";
// import Logincard from "../../Logincard";
import useRegister from "../../hooks/use-register";
import useLogin from "../../hooks/use-login";
import NewUserCard from "../../components/NewUserCard/NewUserCard";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [isNewUser, setIsNewUser] = useState(true);
  const navigate = useNavigate();

  const [emailToRegister, setEmailToRegister] = useState(null);
  const [passwordToRegister, setPasswordToRegister] = useState(null);

  const { register, user } = useRegister(emailToRegister, passwordToRegister);
  const { login, loggedUser } = useLogin(emailToRegister, passwordToRegister);

  useEffect(() => {
    if (emailToRegister === null || passwordToRegister === null) return;
    if (isNewUser) registerAndRedirect();
    else loginAndRedirect();
  }, [emailToRegister, passwordToRegister, register, isNewUser]);

  const loginAndRedirect = async () => {
    try {
      await login();
      navigate("/home");
    } catch (e) {
      console.log(e);
    }
  };
  const registerAndRedirect = async () => {
    try {
      await register();
      navigate("/new-user");
    } catch (e) {}
  };
  return (
    <div className="login-page">
      <img
        className="login-hero-img"
        src={process.env.PUBLIC_URL + "/assets/login-hero.png"}
        alt=""
      />
      {user && <p>user</p>}
      {loggedUser && <button>loggedUser</button>}
      {/* {loggedUser === null && ( */}
      <LoginCard
        setEmailToRegister={setEmailToRegister}
        setPasswordToRegister={setPasswordToRegister}
        isNewUser={isNewUser}
        setIsNewUser={setIsNewUser}
      />
      {/* {isUserRegistered ? <NewUserCard /> : null} */}
    </div>
  );
}

export default LoginPage;
