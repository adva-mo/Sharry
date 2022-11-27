// import { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/database-config";

const useAuth = (email, password, action) => {
  const authentication = async () => {
    console.log("register func");
    try {
      await action(auth, email, password);
    } catch (e) {
      console.log(e.message);
      console.log(e);
    }
  };

  return {
    authentication,
  };
};
export default useAuth;
