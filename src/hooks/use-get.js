import React, { useEffect, useCallback, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../utils/database-config";

function useGet(collectionName, applyData) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const requiredCollection = collection(db, collectionName);

  const getFromCollection = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getDocs(requiredCollection);
      const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log(data);
      applyData(data);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    isLoading,
    error,
    getFromCollection,
  };
}

export default useGet;

// doc.data() function from the firestore library which returns object containing the user info without the id
