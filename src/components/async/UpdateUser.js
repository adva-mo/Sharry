import React, { useEffect } from "react";
import { db } from "../../utils/database-config";
import { updateDoc, collection, doc } from "firebase/firestore";

//this component need to get the id of the user (the use doc) in order to post!

function UpdateUser() {
  const usersCollection = collection(db, "users");
  const usertoupdate = { name: "ella", lastName: "mozes" };

  useEffect(() => {
    postUser();
  }, []);

  const postUser = async () => {
    try {
      const userDoc = doc(db, "users", "wyYI6GI8X3VsdldKJtNn");
      const newFields = { age: 23 }; //updating specific keys
      await updateDoc(userDoc, newFields);
      console.log("updated");
    } catch (e) {}
  };

  return <div>UpdateUser</div>;
}

export default UpdateUser;
