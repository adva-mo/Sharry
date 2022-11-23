import React, { useEffect, useState } from "react";
import NewRecipeForm from "../components/NewRecipeForm/NewRecipeForm";
import { auth } from "../utils/database-config";
import Login from "../components/authentication/Login";

function NewRecipePage() {
  const [newRecipe, setNewRecipe] = useState();
  const currentUser = auth.currentUser?.uid || null;

  useEffect(() => {
    //send recipe to DB
  }, [newRecipe]);

  return (
    <div>
      <Login />
      <NewRecipeForm setNewRecipe={setNewRecipe} />
    </div>
  );
}

export default NewRecipePage;
