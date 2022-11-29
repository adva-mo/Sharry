import React, { useEffect } from "react";
// import { auth } from "../../utils/database-config";
import "./SearchDish.css";

function SearchDish({
  recipes,
  setSearchInput,
  setrecipesToDisplay,
  searchInput,
}) {
  // const [searchInput, setSearchInput] = useState("");
  // const loggedUser = auth?.currentUser.uid;
  console.log(setSearchInput);

  // useEffect(() => {
  //   const debounce = setTimeout(() => {
  //     setrecipesToDisplay(recipes);
  //     //! add function that filters dishes from recipes
  //   }, 2000);
  //   return () => {
  //     clearTimeout(debounce);
  //   };
  // }, [searchInput]);

  // const recipes = searchInput !== "" ? "" : "";

  return (
    <div className="search-box main-content flex">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        className="search-input"
        type="text"
        name="explore-input"
        placeholder="TYPE YOUR DISH"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className="red-round-btn">Search</button>
    </div>
  );
}

export default SearchDish;
