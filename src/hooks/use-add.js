import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/database-config";

function useAdd(collectionName, dispatch, newObj) {
  //   console.log(newObj);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const requiredCollection = collection(db, collectionName);

  const addToCollection = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await addDoc(requiredCollection, newObj);
      console.log("doc added to DB");
      dispatch({ type: "ADD", playload: newObj });
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
