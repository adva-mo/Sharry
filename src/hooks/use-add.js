import { useState } from "react";
import { doc } from "firebase/firestore";
import { db } from "../utils/database-config";

function useAdd(collectionName, dispatch, id, action) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addToCollection = async (newObj) => {
    // let userDoc;
    setIsLoading((prev) => true);
    setError(null);

    const userDoc = doc(db, collectionName, id);
    try {
      await action(userDoc, newObj);
      setIsLoading((prev) => false);
    } catch (e) {
      setIsLoading((prev) => false);
      console.log(e);
      setError(e.message);
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
