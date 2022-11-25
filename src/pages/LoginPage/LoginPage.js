import React from "react";
import "./LoginPage.css";
import LoginCard from "../../components/LoginCard/LoginCard";

function LoginPage() {
  return (
    <div className="login-page">
      <img
        className="login-hero-img"
        src={process.env.PUBLIC_URL + "/assets/login-hero.png"}
      />
      <LoginCard />
    </div>
  );
}

export default LoginPage;
