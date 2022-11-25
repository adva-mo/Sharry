import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../utils/database-config";

const useRegister = (email, password) => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    //? check to moce it to a higher component cause itll affect all the app
    setUser(currentUser);
  });

  const register = async () => {
    console.log("register func");
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      setUser(user);
    } catch (e) {
      console.log(e.message);
    }
  };
  return {
    register,
    user,
  };
};
export default useRegister;
