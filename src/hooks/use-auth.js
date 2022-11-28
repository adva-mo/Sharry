import { useState } from "react";
import { auth } from "../utils/database-config";
import { useNavigate } from "react-router-dom";

const useAuth = (email, password, action) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const authentication = async () => {
    setIsLoading((prev) => true);
    console.log("in use-auth");
    try {
      await action(auth, email, password);
      const userId = auth.currentUser.uid;
      setIsLoading((prev) => false);
      navigate(`/users/${userId}`); //todo: navigate to user profile

      return userId;
    } catch (e) {
      setIsLoading((prev) => false);
      console.log(e.message);
      setError(e.message);
      // console.log(e);
    }
  };

  return {
    authentication,
    isLoading,
    error,
  };
};
export default useAuth;
