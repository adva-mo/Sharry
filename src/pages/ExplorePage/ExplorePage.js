import React, { useEffect, useState } from "react";
import SearchDish from "../../components/SearchDish/SearchDish";
import RecipePreview from "../../components/RecipePreview/RecipePreview";
import "./ExplrePage.css";
import { filteredRecipes } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

function ExplorePage({ recipes, users }) {
  const [searchInput, setSearchInput] = useState("");
  const [recipesToDisplay, setrecipesToDisplay] = useState(recipes);
  const navigate = useNavigate();

  useEffect(() => {
    if (!recipes) navigate("/home");
    if (searchInput === "") setrecipesToDisplay(recipes);
    else setrecipesToDisplay(filteredRecipes(recipes, searchInput)); // eslint-disable-next-line
  }, [searchInput]);

  return (
    <div className="explore-hero flex-column">
      <img
        className="hero-img"
        src={process.env.PUBLIC_URL + "/assets/explore-hero.png"}
        alt=""
      />
      <SearchDish
        setSearchInput={setSearchInput}
        setrecipesToDisplay={setrecipesToDisplay}
        searchInput={searchInput}
      />
      <div className="recipes-container flex">
        {" "}
        {recipesToDisplay?.map((recipe) => {
          return <RecipePreview key={recipe.id} color={"pink"} {...recipe} />;
        })}
      </div>
    </div>
  );
}

export default ExplorePage;
