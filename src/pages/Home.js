import React, { useEffect } from "react";
import useAdd from "../hooks/use-add";
import useGet from "../hooks/use-get";
// import DeleteUser from "../components/async/DeleteUser";
// import useAdd from "../hooks/use-add";

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
      {console.log(users)}
      {/* <DeleteUser /> */}
      {recipes && <p>recepies fetched</p>}
      {users && <p>users fetched</p>}
    </div>
  );
}

export default Home;
