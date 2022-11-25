import React from "react";
import { Link } from "react-router-dom";
import "./RecipePreview.css";

function RecipePreview({ color, name, type, img, id }) {
  return (
    <div
      className="recipe-preview"
      style={color && { backgroundColor: "rgba(255, 124, 140, 1)" }}
    >
      <Link to={`/recipe/${id}`}>
        <img
          className="recipe-preview-pic"
          src={process.env.PUBLIC_URL + "/pizza.png"}
          alt=""
        />
        <div>
          <h3>{name}</h3>
          <p>{type}</p>
          <a>READ MORE</a>
        </div>
      </Link>
    </div>
  );
}

export default RecipePreview;
