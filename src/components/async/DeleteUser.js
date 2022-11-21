import React, { useEffect } from "react";
import { db } from "../../utils/database-config";
import { deleteDoc, collection, doc } from "firebase/firestore";

//!this component recieves id of the user (the user doc) in order to delete user

function DeleteUser() {
  const usersCollection = collection(db, "users");
  //   const usertodelete = { name: "ella", lastName: "mozes" };

  useEffect(() => {
    deleteUser();
  }, []);

  const deleteUser = async () => {
    try {
      const userDoc = doc(db, "users", "wyYI6GI8X3VsdldKJtNn");
      await deleteDoc(userDoc, usertodelete);
      console.log("deleted");
    } catch (e) {}
  };
  return <div>DeleteUser</div>;
}

export default DeleteUser;
