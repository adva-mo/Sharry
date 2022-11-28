import React from "react";
import Snapshot from "../../components/Snapshot/Snapshot";
// import useGet from "../homePage/Home";
import "./home.css";

function Home({ recipes, dispatchRecipes, dispatchUsers, users, loggedUser }) {
  // const {
  //   isLoading: isRecipesLoading,
  //   error: isRecipesError,
  //   getFromCollection: getRecipes,
  // } = useGet("recipes", dispatchRecipes);

  // const {
  //   isLoading: isUsersLoading,
  //   error: isUsersError,
  //   getFromCollection: getUsers,
  // } = useGet("users", dispatchUsers);

  // useEffect(() => {
  //   getRecipes();
  //   getUsers();
  // }, []);

  return (
    <div className="home-page">
      <div className="flex" style={{ padding: "2rem" }}>
        <div>
          <h1>Sharry</h1>
          <h3>save & share your recipes.</h3>
        </div>
        <img
          id="veggies-img"
          src={process.env.PUBLIC_URL + "/assets/homePage/sliced-veg.png"}
          alt="hero-img"
        />
      </div>
      {/* <img
        className="hero-img"
        src={process.env.PUBLIC_URL + "/assets/new-recipe.png"}
      /> */}
      <Snapshot
        description="discover a whole world of amazing recipes!"
        navigateTo={"explore"}
      />
      {loggedUser ? (
        <Snapshot
          description="add new recipe to your collection!"
          navigateTo={"new-recipe"}
        />
      ) : (
        <Snapshot
          description="sign in and start saving your favourites recipes!"
          navigateTo={"login"}
        />
      )}
    </div>
  );
}

export default Home;
