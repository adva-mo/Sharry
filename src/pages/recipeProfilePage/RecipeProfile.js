import React, { useEffect, useState } from "react";
import "./RecipeProfile.css";
import RecipePreview from "../../components/RecipePreview/RecipePreview";
import { getRecipeById } from "../../utils/utils";
import { useParams } from "react-router-dom";

function RecipeProfile({ recipes }) {
  const [currentRecipe, setCurrentRecipe] = useState(null);
  console.log(recipes);
  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    setCurrentRecipe(getRecipeById(recipes, params.id));
  }, [recipes, params.id]);

  if (currentRecipe)
    return (
      <>
        {console.log(currentRecipe)}
        <div className="main-content bottom-border gap">
          <div className="flex-column gap">
            <h1>{currentRecipe.name}</h1>
            <h2>delicious {currentRecipe.type} dish!</h2>
          </div>
          <div className="flex recipe-settings">
            <div>
              <i className="fa-regular fa-clock red"></i> &nbsp; time:{" "}
              {currentRecipe.time}
            </div>
            <div>
              <i className="fa-regular fa-star red"></i>&nbsp; RATINGS
            </div>
            <div>
              <i className="fa-regular fa-pen-to-square red"></i>&nbsp; REVIEWS
            </div>
          </div>
          <div className="recipe-full-profile">
            <div className="big-recipe-img-container">
              <img
                className="big-recipe-img"
                src={process.env.PUBLIC_URL + "/assets/recipe-main-pic.png"}
                alt=""
              />
            </div>
          </div>
        </div>
        <h2 className="sub-title">MORE DISHES</h2>
        <div className="recipes-container flex">
          <RecipePreview />
          <RecipePreview />
          <RecipePreview />
          <RecipePreview />
        </div>
      </>
    );
}

export default RecipeProfile;
