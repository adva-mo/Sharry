import React, { useEffect, useReducer, useState } from "react";
import useGet from "../hooks/use-get";
// import { recipesReducers } from "../reducers/recipesReducers";

function ExplorePage({ setstatefunction, recipes }) {
  // const [recipes, setRecipes] = useReducer(recipesReducers, null);
  const {
    isLoading,
    error,
    getFromCollection: getRecipes,
  } = useGet("recipes", setstatefunction);

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      Explore
      {recipes?.length > 0 && <p>ok</p>}
    </div>
  );
}

export default ExplorePage;
