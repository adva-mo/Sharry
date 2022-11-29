import { useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../utils/database-config";
//?this hook apply only on updating recipe, adding it to db, adding it to state and updating user recipes in state
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
    console.log(newObj);
    setIsLoading(true);
    setError(null);
    try {
      await updateDoc(userDoc, newObj);
      console.log(`doc updated to ${collectionName} DB`);
      dispatch({ type: "EDIT", playload: { id: id, data: newObj } });
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

export default useUpdate;

// doc.data() function from the firestore library which returns object containing the user info without the id

//* the usage of use-add - setting a new doc with a provided id
// const { addToCollection } = useAdd("recipes", dispatchRecipes, {
//   newObj,
//   id,
// });
