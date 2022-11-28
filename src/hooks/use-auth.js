import { useState } from "react";
import { auth } from "../utils/database-config";

const useAuth = (email, password, action) => {
  const [isLoading, setIsLoading] = useState(false);

  const authentication = async () => {
    setIsLoading((prev) => true);
    console.log("in use-auth");
    try {
      await action(auth, email, password);
      setIsLoading((prev) => false);
    } catch (e) {
      setIsLoading((prev) => false);
      console.log(e.message);
      console.log(e);
    }
  };

  return {
    authentication,
    isLoading,
  };
};
export default useAuth;
