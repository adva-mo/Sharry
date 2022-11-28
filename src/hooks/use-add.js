import { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../utils/database-config";

function useAdd(collectionName, dispatch, id) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addToCollection = async (newObj) => {
    let userDoc;
    setIsLoading((prev) => true);
    setError(null);

    if (collectionName === "users") {
      userDoc = doc(db, "users", id);
    } else if (collectionName === "recipes") {
      userDoc = doc(db, "recipes", Math.random() + "");
    }

    try {
      console.log(newObj);
      // await setDoc(userDoc, newObj); //todo: add recipe id to reducer
      console.log(`doc added to ${collectionName} collection`);
      // dispatch({ type: "ADD", playload: newObj });
      setTimeout(() => {
        console.log("time");
        setIsLoading((prev) => false);
      }, 2000);
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
