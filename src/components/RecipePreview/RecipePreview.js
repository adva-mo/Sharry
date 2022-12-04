import React from "react";
import { Link } from "react-router-dom";
import "./RecipePreview.css";

function RecipePreview({ color, name, type, img, id }) {
  return (
    <div
      className="recipe-preview"
      style={color && { backgroundColor: "rgba(255, 124, 140, 0.2)" }}
    >
      <Link to={`/recipe/${id}`}>
        <img
          className="recipe-preview-pic"
          src={
            img
              ? img
              : "https://firebasestorage.googleapis.com/v0/b/sharry-1319e.appspot.com/o/assets%2Fdishes%2Ffood.jpg?alt=media&token=5281595d-d7ec-4332-86f3-17ddf95a4a89"
          }
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
