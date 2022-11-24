import React, { useEffect, useState } from "react";
import NewRecipeForm from "../components/NewRecipeForm/NewRecipeForm";
import Login from "../components/authentication/Login";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/database-config";
import useAdd from "../hooks/use-add";

function NewRecipePage() {
  const recipesCollection = collection(db, "recipes");
  const [newRecipe, setNewRecipe] = useState(null);

  const {
    isLoading,
    error,
    addToCollection: addRecipe,
  } = useAdd("recipes", dispatchRecipes);

  useEffect(() => {
    if (!newRecipe) return;
    addRecipe();
  }, [newRecipe]);

  const createRecipe = async () => {
    try {
      await addDoc(recipesCollection, newRecipe); //first arg: user colection ref,second arg: user data object
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Login />
      <NewRecipeForm setNewRecipe={setNewRecipe} />
    </div>
  );
}

export default NewRecipePage;
