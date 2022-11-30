import { useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../utils/database-config";

function useUpdate(collectionName, dispatch, id) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let userDoc;

  if (collectionName === "users") {
    userDoc = doc(db, "users", id);
  } else if (collectionName === "recipes") {
    userDoc = doc(db, "recipes", id + "");
  }
  const addToCollection = async (newObj) => {
    setIsLoading(true);
    setError(null);
    try {
      await updateDoc(userDoc, newObj);
      console.log(`doc updated to ${collectionName} DB`);
      dispatch({ type: "EDIT", playload: { id: id, data: newObj } });
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  return {
    isLoading,
    error,
    addToCollection,
  };
}

export default useUpdate;
