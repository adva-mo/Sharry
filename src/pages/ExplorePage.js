import React, { useEffect, useState } from "react";
import useGet from "../components/hooks/use-get.js";

function ExplorePage() {
  const [recipes, setrecipes] = useState([]);
  const {
    isLoading,
    error,
    getFromCollection: getRecipes,
  } = useGet("recipes", setrecipes);

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      Explore
      {recipes.length > 0 && <p>ok</p>}
    </div>
  );
}

export default ExplorePage;
