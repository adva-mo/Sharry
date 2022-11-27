import React, { useContext, useEffect, useState } from "react";
import NewRecipeForm from "../../components/NewRecipeForm/NewRecipeForm";
import currentLoggedUser from "../../context/loggedUserContext";
import useAdd from "../../hooks/use-add";
// import LoginCard from "../../components/LoginCard/LoginCard";
import LoginPage from "../LoginPage/LoginPage";
import "./newRecipePage.css";

function NewRecipePage({ dispatchRecipes }) {
  const [newRecipe, setNewRecipe] = useState(null);
  const loggedUserCtx = useContext(currentLoggedUser);
  // console.log(loggedUserCtx);

  const {
    // isLoading,
    // error,
    addToCollection: addRecipe,
  } = useAdd("recipes", dispatchRecipes, newRecipe);

  useEffect(() => {
    if (newRecipe === null) return;
    addRecipe();
  }, [newRecipe]);

  return (
    <div className="new-recipe-page">
      {loggedUserCtx?.uid ? (
        <NewRecipeForm setNewRecipe={setNewRecipe} />
      ) : (
        // <LoginCard />
        <LoginPage />
      )}
    </div>
  );
}

export default NewRecipePage;
