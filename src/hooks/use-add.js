import { useState } from "react";
import { setDoc, collection, doc } from "firebase/firestore";
import { db } from "../utils/database-config";

function useAdd(collectionName, dispatch, newObj, id) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  //   const requiredCollection = collection(db, collectionName);

  const addToCollection = async () => {
    let userDoc;
    setIsLoading(true);
    setError(null);
    try {
      if (collectionName === "users") {
        userDoc = doc(db, "users", id);
      } else if (collectionName === "recipes") {
        userDoc = doc(db, "recipes", Math.random() + "");
      }

      await setDoc(userDoc, newObj);
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

//* the usage of use-add - setting a new doc with a provided id
// const { addToCollection } = useAdd("recipes", dispatchRecipes, {
//   newObj,
//   id,
// });
