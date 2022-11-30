import { setDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import NewRecipeForm from "../../components/NewRecipeForm/NewRecipeForm";
import Spinner from "../../components/Spinner/Spinner";
import currentLoggedUser from "../../context/loggedUserContext";
import useAdd from "../../hooks/use-add";
import LoginPage from "../LoginPage/LoginPage";
import "./newRecipePage.css";

function NewRecipePage({ dispatchRecipes }) {
  const [newRecipe, setNewRecipe] = useState(null);
  const loggedUserCtx = useContext(currentLoggedUser);
  const newRecipeId = Math.random() + "";

  const {
    isLoading,
    // error,
    addToCollection: addRecipe,
  } = useAdd("recipes", dispatchRecipes, newRecipeId, setDoc);

  useEffect(() => {
    if (newRecipe === null) return;
    handleDBrequsests(); // eslint-disable-next-line
  }, [newRecipe]);

  const handleDBrequsests = async () => {
    try {
      await addRecipe(newRecipe);
      await dispatchRecipes({
        type: "ADD",
        playload: { ...newRecipe, id: newRecipeId },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="new-recipe-page">
      {isLoading && <Spinner />}
      {!isLoading && loggedUserCtx?.uid ? (
        <NewRecipeForm setNewRecipe={setNewRecipe} />
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default NewRecipePage;
