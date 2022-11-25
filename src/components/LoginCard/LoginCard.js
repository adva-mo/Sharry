import React from "react";
import "./LoginCard.css";

function LoginCard() {
  return (
    // <div className="login-card">
    <form className="flex-column login-card">
      <h3>Login and start Sharrying!</h3>
      <label htmlFor="email">email</label>
      <input
        placeholder="enter your email"
        className="bottom-border"
        type="email"
        name="email"
      />
      <label htmlFor="password">password</label>
      <input
        placeholder="enter your password"
        className="bottom-border"
        type="password"
        name="password"
      />
      <label htmlFor="password">repeat your password</label>
      <input
        placeholder="repeat your email"
        className="bottom-border"
        type="password"
        name="password"
      />
      <button className="red-round-btn">Log in</button>
    </form>
    // </div>
  );
}
export default LoginCard;
