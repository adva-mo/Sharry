import React from "react";
import RecipePreview from "../RecipePreview/RecipePreview";
function UserRecipes() {
  return (
    <>
      <h3>
        UserRecipes <span style={{ fontSize: "small" }}>add new recipe</span>{" "}
      </h3>
      <div className="recipes-container flex">
        {}
        <RecipePreview />
        <RecipePreview />
        <RecipePreview />
        <RecipePreview />
        <RecipePreview />
        <RecipePreview />
        <RecipePreview />
        <RecipePreview />
        <RecipePreview />
        <RecipePreview />
        <RecipePreview />
        <RecipePreview />
        <RecipePreview />
        <RecipePreview />
        <RecipePreview />
      </div>
    </>
  );
}

export default UserRecipes;
