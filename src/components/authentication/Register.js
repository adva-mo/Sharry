import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../utils/database-config";

function Register() {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    // this functions describe what happens if theres a change in the user login state
    //it maintains the user connected even if he refresh the web
    //? check to moce it to a higher component cause itll affect all the app
    setUser(currentUser);
  });

  const register = async () => {
    console.log("register func");
    const email = "example2@example2.com";
    const password = "test12345";
    try {
      //*when creating a new account, the user will be logged in authomatically and the
      //* user information will be stored in the user variable
      const user = await createUserWithEmailAndPassword(auth, email, password);
      // console.log(user);
      // const userUID = user.user.uid;
    } catch (e) {
      //*firebase does the validations for email
      // "test@test.com" - passed
      // !an existing user cant be made twice;
      // ! password must be 6 chars at least
      console.log(e.message);
    }
  };
  return (
    <div>
      <p>registered: {user?.email}</p>
      <button onClick={() => register()}>register</button>
    </div>
  );
}

export default Register;
//? how to connect a user regustration info to his account?
// store the uid of the new user and the email, send the user
// to a next page where he will fill out the rest of he`s profile,
// and create a new user with the uid and the email adress
