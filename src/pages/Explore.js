import React, { useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../utils/database-config.js";

function Explore() {
  const usersCollection = collection(db, "recipes");

  useEffect(() => {
    getRecipes();
  });

  const getRecipes = async () => {
    try {
      const response = await getDocs(usersCollection);
      const state = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log(state);
    } catch (e) {
      console.log(e);
    }
  };
  return <div>Explore</div>;
}

export default Explore;
