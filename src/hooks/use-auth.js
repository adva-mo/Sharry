import { useState } from "react";
import { auth } from "../utils/database-config";
import { useNavigate } from "react-router-dom";

const useAuth = (email, password, action) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const authentication = async () => {
    setIsLoading((prev) => true);
    try {
      await action(auth, email, password);
      const userId = auth.currentUser.uid;
      setIsLoading((prev) => false);
      if (userId) navigate(`/users/${userId}`);
    } catch (e) {
      setIsLoading((prev) => false);
      setError(e.message);
    }
  };

  return {
    authentication,
    isLoading,
    error,
    setError,
  };
};
export default useAuth;
