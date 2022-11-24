import { useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../utils/database-config";

function useAdd(collectionName, dispatch) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const requiredCollection = collection(db, collectionName);

  const addToCollection = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getDocs(requiredCollection);
      const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch({ type: "GET", playload: [...data] });
    } catch (e) {
      console.log(e);
    }
  };

  return {
    isLoading,
    error,
    addToCollection,
  };
}

export default useAdd;

// doc.data() function from the firestore library which returns object containing the user info without the id
