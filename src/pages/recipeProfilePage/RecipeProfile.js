import React, { useEffect, useState } from "react";
import "./RecipeProfile.css";
import RecipePreview from "../../components/RecipePreview/RecipePreview";
import { getRecipeById } from "../../utils/utils";
import { useNavigate, useParams } from "react-router-dom";
import useDelete from "../../hooks/use-delete";
import { auth } from "../../utils/database-config";

function RecipeProfile({ recipes, ownToUser, dispatchUsers, dispatchRecipes }) {
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [editMood, setEditMood] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const { deleteFromCollection, isLoading, error } = useDelete(
    "recipes",
    dispatchRecipes,
    params.id
  );

  useEffect(() => {
    setCurrentRecipe(getRecipeById(recipes, params.id));
  }, [recipes, params.id]);

  const deleteHandler = async () => {
    console.log("delete recipe");
    await deleteFromCollection();
    console.log("sucess");
    navigate(`/users/${auth.currentUser.uid}`);
  };
  const editHandler = () => {};

  if (currentRecipe)
    return (
      <>
        {console.log(currentRecipe)}
        <div className="main-content bottom-border gap">
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
              onClick={() => {
                editHandler();
              }}
            >
              edit
            </button>
            <button
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
              <div className="ingrediants-container">
                ingrediants:
                <input
                  type="text"
                  defaultValue={currentRecipe.ingrediants}
                  readOnly={!editMood}
                />
              </div>
            </div>
          </div>
          <div>
            <h3>INSTRUCTIONS:</h3>
            <input
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
