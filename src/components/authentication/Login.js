import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth } from "../../utils/database-config";

function Login() {
  const login = async () => {
    console.log("login function");
    const email = "test@test.com";
    const password = "test12345";
    try {
      //*when creating a new account, the user will be logged in authomatically and the
      //* user information will be stored in the user variable
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      //   const userUID = user.user.uid;
    } catch (e) {
      //*firebase does the validations for email
      // !only registered users can log in
      console.log(e.message);
    }
  };
  return (
    <div>
      Login
      <button onClick={login}>login</button>
    </div>
  );
}

export default Login;
