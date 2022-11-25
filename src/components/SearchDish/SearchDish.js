import React from "react";
import "./SearchDish.css";

function SearchDish() {
  return (
    <div className="search-box main-content flex">
      <i className="fa-solid fa-magnifying-glass"></i>

      <input
        className="search-input"
        type="text"
        name="explore-input"
        placeholder="TYPE YOUR DISH"
      />
      <button className="red-round-btn">Search</button>
    </div>
  );
}

export default SearchDish;
