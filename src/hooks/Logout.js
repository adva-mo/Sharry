import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/database-config";

function Logout() {
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <button className="logout-btn" onClick={logout}>
      LogOut
    </button>
  );
}

export default Logout;
