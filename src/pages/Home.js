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
      <h2>Home</h2>
      {console.log(recipes)}
      {recipes && <p>recepies fetched</p>}
      {users && <p>users fetched</p>}
    </div>
  );
}

export default Home;
