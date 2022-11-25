import React from "react";
import "./RecipePreview.css";

function RecipePreview({ color, name, type, img }) {
  console.log(name);
  return (
    <div
      className="recipe-preview"
      style={color && { backgroundColor: "rgba(255, 124, 140, 1)" }}
    >
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
    </div>
  );
}

export default RecipePreview;
