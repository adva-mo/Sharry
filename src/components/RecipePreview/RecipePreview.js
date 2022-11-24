import React from "react";
import "./RecipePreview.css";

function RecipePreview() {
  return (
    <div className="recipe-preview">
      <img
        className="recipe-preview-pic"
        src={process.env.PUBLIC_URL + "/pizza.png"}
        alt=""
      />
      <div>
        <h3>pizza</h3>
        <p>italian</p>
        <a>discover more</a>
      </div>
    </div>
  );
}

export default RecipePreview;
