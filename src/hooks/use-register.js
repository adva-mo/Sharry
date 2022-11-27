// import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/database-config";

const useRegister = (email, password) => {
  const register = async () => {
    console.log("register func");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.log(e.message);
    }
  };

  return {
    register,
  };
};
export default useRegister;
