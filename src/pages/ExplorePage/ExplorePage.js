import React from "react";
import SearchDish from "../../components/SearchDish/SearchDish";
import RecipePreview from "../../components/RecipePreview/RecipePreview";
import "./ExplrePage.css";

function ExplorePage({ recipes, users }) {
  return (
    <div className="explore-hero flex-column">
      <img
        className="hero-img"
        src={process.env.PUBLIC_URL + "/assets/explore-hero.png"}
        alt=""
      />
      <SearchDish />
      <div className="recipes-container flex">
        {" "}
        {recipes?.map((recipe) => {
          return <RecipePreview key={recipe.id} color={"pink"} {...recipe} />;
        })}
      </div>
    </div>
  );
}

export default ExplorePage;
