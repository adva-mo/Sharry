import React from "react";
import "./RecipeProfile.css";
import RecipePreview from "../../components/RecipePreview/RecipePreview";

function RecipeProfile({ type }) {
  return (
    <>
      <div className="main-content bottom-border gap">
        <div className="flex-column gap">
          <h1>TOMATO PASTA</h1>
          <h2>delicious {type} dish!</h2>
        </div>
        <div className="flex recipe-settings">
          <div>
            <i className="fa-regular fa-clock red"></i> &nbsp; 0-30 MINUTES
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
