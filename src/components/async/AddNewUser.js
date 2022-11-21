import React, { useEffect } from "react";
import { db } from "../../utils/database-config";
import { addDoc, collection } from "firebase/firestore";

function AddNewUser() {
  const usersCollection = collection(db, "users");
  const newUser = { name: "ella", lastName: "mozes" };

  useEffect(() => {
    // eslint-disable-next-line
    createUser();
  }, []);

  const createUser = async () => {
    try {
      await addDoc(usersCollection, newUser); //first arg: user colection ref,second arg: user data object
    } catch (e) {}
  };

  return <div>addNewUser</div>;
}

export default AddNewUser;
