import React, { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import useGet from "../components/hooks/use-get.js";

function Explore() {
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

export default Explore;
