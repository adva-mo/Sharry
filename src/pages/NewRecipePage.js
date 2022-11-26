import React, { useEffect, useState } from "react";
import NewRecipeForm from "../components/NewRecipeForm/NewRecipeForm";
import useAdd from "../hooks/use-add";

function NewRecipePage({ dispatchRecipes }) {
  const [newRecipe, setNewRecipe] = useState(null);

  const {
    // isLoading,
    // error,
    addToCollection: addRecipe,
  } = useAdd("recipes", dispatchRecipes, newRecipe);

  useEffect(() => {
    if (!newRecipe) return;
    addRecipe();
  }, [newRecipe, addRecipe]);

  return (
    <div>
      <NewRecipeForm setNewRecipe={setNewRecipe} />
    </div>
  );
}

export default NewRecipePage;
