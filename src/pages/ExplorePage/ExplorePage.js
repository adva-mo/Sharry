import React, { useEffect, useState } from "react";
import SearchDish from "../../components/SearchDish/SearchDish";
import RecipePreview from "../../components/RecipePreview/RecipePreview";
import "./ExplrePage.css";
import { filteredRecipes } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

function ExplorePage({ recipes, users }) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [recipesToDisplay, setrecipesToDisplay] = useState(null);

  const filtered = recipes?.filter((recipe) => {
    console.log(recipe.share);
    return recipe.share === "true";
  });
  console.log(filtered);

  useEffect(() => {
    setrecipesToDisplay((prev) => filtered);
  }, []);

  useEffect(() => {
    if (!recipes) navigate("/home");
    if (searchInput === "") setrecipesToDisplay(recipes);
    else setrecipesToDisplay(filteredRecipes(recipes, searchInput)); // eslint-disable-next-line
  }, [searchInput]);

  return (
    <div className="explore-hero flex-column">
      <img
        className="hero-img"
        src="https://firebasestorage.googleapis.com/v0/b/sharry-1319e.appspot.com/o/assets%2Fexplore-hero.png?alt=media&token=25a2d2d0-7558-4ea9-9647-1e13a156f75a"
        alt=""
      />
      <SearchDish
        setSearchInput={setSearchInput}
        setrecipesToDisplay={setrecipesToDisplay}
        searchInput={searchInput}
      />
      <div className="recipes-container flex">
        {" "}
        {filtered?.map((recipe) => {
          return <RecipePreview key={recipe.id} color={"pink"} {...recipe} />;
        })}
      </div>
    </div>
  );
}

export default ExplorePage;
