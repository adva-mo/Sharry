import React, { useEffect, useState } from "react";
import RecipePreview from "../RecipePreview/RecipePreview";
import { getUserRecipes } from "../../utils/utils";

function UserRecipes({ userId, recipes }) {
  const [userRecipes, setUserRecipes] = useState(null);

  useEffect(() => {
    if (!userId || !recipes) return;
    setUserRecipes(getUserRecipes(recipes, userId));
  }, [recipes, userId]);

  return (
    <>
      <h3>
        <span style={{ fontSize: "small" }}>YOUR RECIPES COLLECTION</span>{" "}
      </h3>
      <div className="recipes-container flex more-recipes">
        {userRecipes &&
          userRecipes.map((recipe) => {
            return <RecipePreview key={recipe.id} {...recipe} id={recipe.id} />;
          })}
      </div>
    </>
  );
}

export default UserRecipes;
