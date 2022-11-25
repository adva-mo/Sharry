import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/database-config";

const useLogin = (email, password) => {
  let loggedUser;
  const login = async () => {
    console.log("login function");
    try {
      loggedUser = await signInWithEmailAndPassword(auth, email, password);
      console.log(loggedUser);
    } catch (e) {
      console.log(e.message);
    }
  };
  return {
    login,
    loggedUser,
  };
};
export default useLogin;
