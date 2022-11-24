import React, { useState } from "react";
import { db, auth } from "../utils/database-config.js";
import { deleteDoc, collection, doc } from "firebase/firestore";

//!this component recieves id of the user (the user doc) in order to delete user

function useDelete(collectionName, dispatch, id) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteFromCollection = async () => {
    try {
      const userDoc = doc(db, collectionName, id);
      await deleteDoc(userDoc);
      console.log("deleted from DB");
      dispatch({ type: "DELETE", playload: id });
    } catch (e) {
      console.log(e);
    }
  };
  return { isLoading, error, deleteFromCollection };
}

export default useDelete;

//* delete user\user :
//   const { deleteFromCollection: deleteUser } = useDelete(
//     "recipes",
//     dispatchUsers,
//     "5vq7P1dZQhqf4axl0XGP"
//   );
