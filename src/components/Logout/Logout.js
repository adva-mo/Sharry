import { signOut } from "firebase/auth";
import React from "react";
import { redirect, useNavigate } from "react-router-dom";
import { auth } from "../../utils/database-config";

function Logout() {
  const Navigate = useNavigate();
  const logout = async () => {
    console.log("logging out");
    try {
      await signOut(auth);
      Navigate("/home");
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
