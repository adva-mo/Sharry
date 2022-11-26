import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../utils/database-config";
// import currentLoggedUser from "../components/context/loggedUserContext";

function Logout() {
  // const loggedUserctx = useContext(currentLoggedUser);

  const logout = async () => {
    // console.log(loggedUserctx);
    console.log("logging out");
    try {
      ç;
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
    console.log("log out ok");
  };
  return (
    <>
      <button className="logout-btn" onClick={logout}>
        LogOut
      </button>
    </>
  );
}

export default Logout;
