import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import LoginCard from "../../components/LoginCard/LoginCard";
// import Logincard from "../../Logincard";
import useRegister from "../../hooks/use-register";
import useLogin from "../../hooks/use-login";

function LoginPage() {
  const [isNewUser, setIsNewUser] = useState(true);

  const [emailToRegister, setEmailToRegister] = useState(null);
  const [passwordToRegister, setPasswordToRegister] = useState(null);

  const { register, user } = useRegister(emailToRegister, passwordToRegister);
  const { login, loggedUser } = useLogin(emailToRegister, passwordToRegister);

  useEffect(() => {
    if (emailToRegister === null || passwordToRegister === null) return;
    isNewUser ? register() : login();
  }, [emailToRegister, passwordToRegister, register, login, isNewUser]);

  return (
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
      {user && console.log(user)}
      {loggedUser && console.log(loggedUser)}
    </div>
  );
}

export default LoginPage;
