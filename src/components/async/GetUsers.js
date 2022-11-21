import React, { useEffect, useCallback } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../utils/database-config";

function GetUsers({ setUsers }) {
  const usersCollection = collection(db, "users");

  const getUsers = useCallback(async () => {
    try {
      const response = await getDocs(usersCollection);

      const state = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log(state);
      setUsers(state);
    } catch (e) {
      console.log(e);
    } // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return <div>GetUsers</div>;
}

export default GetUsers;

// doc.data() function from the firestore library which returns object containing the user info without the id
