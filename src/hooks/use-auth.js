// import { useState } from "react";
import { auth } from "../utils/database-config";

const useAuth = (email, password, action) => {
  const authentication = async () => {
    console.log("in use-auth");
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
