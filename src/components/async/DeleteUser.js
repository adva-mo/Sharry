import React, { useEffect } from "react";
import { db } from "../../utils/database-config";
import { deleteDoc, collection, doc } from "firebase/firestore";

//!this component recieves id of the user (the user doc) in order to delete user

function DeleteUser() {
  // const usersCollection = collection(db, "users");
  const usertodelete = { email: "email" };

  useEffect(() => {
    deleteUser();
  }, []);

  const deleteUser = async () => {
    try {
      const userDoc = doc(db, "users", "QVlJPdxDU6RJuxKQeAkVI8xW9dg1");
      await deleteDoc(userDoc, usertodelete);
      console.log("deleted");
    } catch (e) {}
  };
  return <div>DeleteUser</div>;
}

export default DeleteUser;
