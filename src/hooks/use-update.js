import { useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../utils/database-config";

function useAdd(collectionName, dispatch, newObj, id) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let userDoc;

  if (collectionName === "users") {
    userDoc = doc(db, "users", id);
  } else if (collectionName === "recipes") {
    userDoc = doc(db, "recipes", Math.random() + "");
  }

  const addToCollection = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await updateDoc(userDoc, newObj);
      console.log(`doc updated to ${collectionName} DB`);
      // dispatch({ type: "", playload: newObj });
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

//* the usage of use-add - setting a new doc with a provided id
// const { addToCollection } = useAdd("recipes", dispatchRecipes, {
//   newObj,
//   id,
// });
