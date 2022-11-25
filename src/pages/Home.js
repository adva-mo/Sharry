import React, { useEffect } from "react";
import useGet from "../hooks/use-get";

function Home({ recipes, dispatchRecipes, dispatchUsers, users }) {
  const {
    isLoading,
    error,
    getFromCollection: getRecipes,
  } = useGet("recipes", dispatchRecipes);

  const { getFromCollection: getUsers } = useGet("users", dispatchUsers);

  useEffect(() => {
    getRecipes();
    getUsers();
  }, []);

  return (
    <div>
      <img
        className="hero-img"
        src={process.env.PUBLIC_URL + "/assets/home-hero.png"}
      />
    </div>
  );
}

export default Home;
