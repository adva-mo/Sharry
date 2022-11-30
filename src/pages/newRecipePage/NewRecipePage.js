import { setDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewRecipeForm from "../../components/NewRecipeForm/NewRecipeForm";
import Spinner from "../../components/Spinner/Spinner";
import currentLoggedUser from "../../context/loggedUserContext";
import useAdd from "../../hooks/use-add";
import { auth } from "../../utils/database-config";
import LoginPage from "../LoginPage/LoginPage";
import "./newRecipePage.css";

function NewRecipePage({ dispatchRecipes }) {
  const [newRecipe, setNewRecipe] = useState(null);
  const loggedUserCtx = useContext(currentLoggedUser);
  const newRecipeId = Math.random() + "";
  const navigate = useNavigate();

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
      navigate(`/users/${auth.currentUser.uid}`);
    } catch (e) {
      console.log(e);
    }
  };
  if (isLoading) return <Spinner />;
  return (
    <div className="new-recipe-page">
      {/* {isLoading && <Spinner />} */}
      {!isLoading && loggedUserCtx?.uid ? (
        <NewRecipeForm setNewRecipe={setNewRecipe} />
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default NewRecipePage;
