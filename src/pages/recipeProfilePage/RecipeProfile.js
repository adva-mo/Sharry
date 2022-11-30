import React, { useEffect, useRef, useState } from "react";
import "./RecipeProfile.css";
import RecipePreview from "../../components/RecipePreview/RecipePreview";
import { getRecipeById } from "../../utils/utils";
import { useNavigate, useParams } from "react-router-dom";
import useDelete from "../../hooks/use-delete";
import { auth } from "../../utils/database-config";
import useUpdate from "../../hooks/use-update";
import Spinner from "../../components/Spinner/Spinner";

function RecipeProfile({ recipes, ownToUser, dispatchUsers, dispatchRecipes }) {
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [editMood, setEditMood] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const instructionsRef = useRef();
  const ingrediantsRef = useRef();

  const { deleteFromCollection, isLoading } = useDelete(
    "recipes",
    dispatchRecipes,
    params.id
  );

  const { addToCollection } = useUpdate("recipes", dispatchRecipes, params.id);
  const { addToCollection: updateUserRecipes } = useUpdate(
    "users",
    dispatchUsers,
    auth.currentUser.uid
  );
  useEffect(() => {
    setCurrentRecipe(getRecipeById(recipes, params.id));
  }, [recipes, params.id]);

  const deleteHandler = async () => {
    console.log("delete recipe");
    await deleteFromCollection();
    await updateUserRecipes();
    console.log("sucess");
    navigate(`/users/${auth.currentUser.uid}`);
  };
  const editHandler = async () => {
    // setEditMood((prev) => !prev);
    if (editMood === true) {
      await addToCollection({
        instructions: instructionsRef.current?.value,
        ingrediants: ingrediantsRef.current?.value,
      });
      setEditMood((prev) => !prev);
    } else setEditMood((prev) => !prev);
  };

  if (currentRecipe)
    return (
      <>
        {console.log(currentRecipe)}
        {isLoading && <Spinner />}
        <div className="main-content bottom-border gap recipe-page">
          <div className="flex-column gap">
            <h1 className="cap">{currentRecipe.name || "DISH NAME"}</h1>
            <h2>Delicious {currentRecipe.type} dish!</h2>
          </div>
          <div className="flex recipe-settings">
            <div>
              <i className="fa-regular fa-clock red"></i> &nbsp;{" "}
              {currentRecipe.time || "0-30 MINUTES"}
            </div>
            <div>
              <i className="fa-regular fa-star red"></i>&nbsp;LIKES &nbsp;
              <span>soon...</span>
            </div>
            <div>
              <i className="fa-regular fa-pen-to-square red"></i>&nbsp; REVIEWS
              &nbsp;
              <span>soon...</span>
            </div>
          </div>
          <div className="flex recipe-settings">
            <button
              className="red-round-btn"
              onClick={() => {
                editHandler();
              }}
            >
              {editMood ? "CONFIRM" : "EDIT"}
            </button>
            <button
              className="red-round-btn"
              onClick={() => {
                deleteHandler();
              }}
            >
              delete
            </button>
          </div>
          <div className="recipe-full-profile">
            <div className="big-recipe-img-container">
              <img
                className="big-recipe-img"
                src={process.env.PUBLIC_URL + "/assets/recipe-main-pic.png"}
                alt=""
              />
              <div className="ingrediants-container ">
                <span className={editMood ? "ing-title" : "ing-title"}>
                  ingrediants: <br />
                </span>
                <textarea
                  ref={ingrediantsRef}
                  type="text"
                  defaultValue={currentRecipe.ingrediants}
                  readOnly={!editMood}
                  className={editMood ? "edit" : ""}
                />
              </div>
            </div>
          </div>
          <div className="main-content instructions-container">
            <h3>INSTRUCTIONS:</h3>
            <textarea
              // className="main-content"
              className={editMood ? "main-content edit" : "main-content"}
              ref={instructionsRef}
              type="text"
              defaultValue={currentRecipe.instructions}
              readOnly={!editMood}
            />
          </div>
        </div>
        <h2 className="sub-title">MORE DISHES</h2>
        <div className="recipes-container flex">
          <RecipePreview />
          {/* todo: funcion that returns 6 random recipes */}
          <RecipePreview />
          <RecipePreview />
          <RecipePreview />
        </div>
      </>
    );
}

export default RecipeProfile;
