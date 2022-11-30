import React, { useState } from "react";
import { db, auth } from "../utils/database-config.js";
import { deleteDoc, collection, doc } from "firebase/firestore";

function useDelete(collectionName, dispatch, id) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteFromCollection = async () => {
    setIsLoading((prev) => true);
    try {
      const userDoc = doc(db, collectionName, id);
      await deleteDoc(userDoc);
      console.log("deleted from DB");
      dispatch({ type: "DELETE", playload: id });
      setIsLoading((prev) => false);
    } catch (e) {
      setIsLoading((prev) => false);
      console.log(e);
      setError(e.message);
    }
  };
  return { isLoading, error, deleteFromCollection };
}

export default useDelete;
