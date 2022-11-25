import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import LoginCard from "../../components/LoginCard/LoginCard";
import useRegister from "../../hooks/use-register";

function LoginPage() {
  const [emailToRegister, setEmailToRegister] = useState(null);
  const [passwordToRegister, setPasswordToRegister] = useState(null);

  const { register, user } = useRegister(emailToRegister, passwordToRegister);

  useEffect(() => {
    if (emailToRegister === null || passwordToRegister === null) return;
    console.log("in use efect");
    register();
  }, [emailToRegister, passwordToRegister, register]);

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
      />
      {user && console.log(user)}
    </div>
  );
}

export default LoginPage;
