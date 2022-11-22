import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../utils/database-config";

function Logout() {
  const logout = async () => {
    await signOut(auth);
  };
  return <button onClick={logout}>Logout</button>;
}

export default Logout;
