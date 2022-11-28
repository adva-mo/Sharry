import React, { useContext, useEffect, useState } from "react";
import NewRecipeForm from "../../components/NewRecipeForm/NewRecipeForm";
import Spinner from "../../components/Spinner/Spinner";
import currentLoggedUser from "../../context/loggedUserContext";
import useAdd from "../../hooks/use-add";
// import LoginCard from "../../components/LoginCard/LoginCard";
import LoginPage from "../LoginPage/LoginPage";
import "./newRecipePage.css";

function NewRecipePage({ dispatchRecipes, dispatchUsers }) {
  const [newRecipe, setNewRecipe] = useState(null);
  const loggedUserCtx = useContext(currentLoggedUser);
  // console.log(loggedUserCtx);

  const {
    isLoading,
    // error,
    addToCollection: addRecipe,
  } = useAdd("recipes", dispatchRecipes);

  useEffect(() => {
    if (newRecipe === null) return;
    try {
      addRecipe(newRecipe); // eslint-disable-next-line
      dispatchRecipes({
        type: "ADD",
        playload: { newRecipe: newRecipe, userId: loggedUserCtx.uid },
      });
      dispatchUsers({
        type: "ADD-RECIPE-TO-USER",
        playload: { userId: loggedUserCtx.uid, recipeId: "999999999" },
      });
    } catch (e) {
      console.log(e);
    }
  }, [newRecipe]);

  return (
    <div className="new-recipe-page">
      {isLoading && <Spinner />}
      {loggedUserCtx?.uid ? (
        <NewRecipeForm setNewRecipe={setNewRecipe} />
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default NewRecipePage;
