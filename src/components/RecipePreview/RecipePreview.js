import React from "react";
import { Link } from "react-router-dom";
import "./RecipePreview.css";

function RecipePreview({ color, name, type, img, id }) {
  if (img === "0") img = "/assets/pizza.png";
  else if (img === "1") img = "/assets/straw-cake.png";
  else if (img === "2") img = "/assets/asian-salad.png";
  else if (img === "3") img = "/assets/spaghetti.png";
  else if (img === "4") img = "/assets/roasted.png";
  else if (img === "5") img = "/assets/steak.png";
  else if (img === "6") img = "/assets/salmon.png";
  else img = "/assets/pizza.png";
  return (
    <div
      className="recipe-preview"
      style={color && { backgroundColor: "rgba(255, 124, 140, 0.2)" }}
    >
      <Link to={`/recipe/${id}`}>
        <img
          className="recipe-preview-pic"
          src={process.env.PUBLIC_URL + img}
          alt=""
        />
        <div>
          <h3>{name}</h3>
          <p>{type || "Amazing taste"}</p>
          <h4 style={{ fontStyle: "italic" }}>READ MORE</h4>
        </div>
      </Link>
    </div>
  );
}

export default RecipePreview;
