import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/database-config";

function Logout() {
  const Navigate = useNavigate();
  const logout = async () => {
    try {
      await signOut(auth);
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button className="blue-btn logout-btn" onClick={logout}>
        LogOut
      </button>
    </>
  );
}

export default Logout;
