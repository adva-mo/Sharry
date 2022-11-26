import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../utils/database-config";

function Logout() {
  const logout = async () => {
    console.log("logging out");
    try {
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
