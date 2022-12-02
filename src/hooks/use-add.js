import { useState } from "react";
import { doc } from "firebase/firestore";
import { db } from "../utils/database-config";

function useAdd(collectionName, dispatch, id, action) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addToCollection = async (newObj) => {
    let userDoc;
    setIsLoading((prev) => true);
    setError(null);

    userDoc = doc(db, collectionName, id);
    // console.log(id);
    try {
      console.log(newObj);
      await action(userDoc, newObj);
      // console.log(`doc added to ${collectionName} collection`);
      setIsLoading((prev) => false);
    } catch (e) {
      setIsLoading((prev) => false);
      // console.log("error");
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
