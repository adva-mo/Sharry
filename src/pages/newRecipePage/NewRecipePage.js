import { setDoc, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import NewRecipeForm from "../../components/NewRecipeForm/NewRecipeForm";
import Spinner from "../../components/Spinner/Spinner";
import currentLoggedUser from "../../context/loggedUserContext";
import useAdd from "../../hooks/use-add";
import { getUserById } from "../../utils/utils";
// import LoginCard from "../../components/LoginCard/LoginCard";
import LoginPage from "../LoginPage/LoginPage";
import "./newRecipePage.css";

function NewRecipePage({ dispatchRecipes, dispatchUsers, users }) {
  const [newRecipe, setNewRecipe] = useState(null);
  const loggedUserCtx = useContext(currentLoggedUser);
  // console.log(loggedUserCtx);

  const {
    isLoading,
    // error,
    addToCollection: addRecipe,
  } = useAdd("recipes", dispatchRecipes, dispatchRecipes, setDoc);

  const {
    addToCollection: addRecipeToUser,
    isLoading: isloadingUser,
    error,
  } = useAdd("users", dispatchUsers, loggedUserCtx.uid, updateDoc);

  useEffect(() => {
    if (newRecipe === null) return;
    handleDBrequsests(); // eslint-disable-next-line
  }, [newRecipe]);

  const handleDBrequsests = async () => {
    try {
      await addRecipe(newRecipe);
      await dispatchRecipes({
        type: "ADD",
        playload: { newRecipe: newRecipe, userId: loggedUserCtx.uid },
      });
      await dispatchUsers({
        type: "ADD-RECIPE-TO-USER",
        playload: { userId: loggedUserCtx.uid, recipeId: "999999999" },
      });
      console.log(getUserById(users, loggedUserCtx.uid));
      await addRecipeToUser(getUserById(users, loggedUserCtx.uid));
    } catch (e) {
      console.log(e);
    }
  };

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
