import React, { useRef } from "react";
import { auth } from "../../utils/database-config";
import "./NewRecipeForm.css";

//!todo: find a way to capture dish types
//!todo: find a way for the user to upload a photo

function NewRecipeForm({ setNewRecipe }) {
  const recipeForm = useRef();
  const currentUserId = auth.currentUser?.uid || null;

  const saveHandler = (e) => {
    e.preventDefault();
    // const data = new FormData(recipeForm.current);
    const newRecipe = Object.fromEntries(new FormData(recipeForm.current));
    recipeForm.current.reset();
    console.log(newRecipe);
    setNewRecipe((prev) => ({ ...newRecipe, owner: currentUserId }));
  };
  return (
    <div className="flex new-recipe-container">
      <form onSubmit={saveHandler} className="new-recipe-form" ref={recipeForm}>
        <div className="flex">
          <label htmlFor="name">
            <input
              className="text-box"
              type="text"
              name="name"
              placeholder="Enter dish name..."
            />
          </label>

          <label htmlFor="share">
            <h4>share your recipe?</h4>
            <input type="radio" name="share" value="true" required /> yes&nbsp;
            <input type="radio" name="share" value="false" /> no
          </label>
        </div>
        <div className="flex">
          <div className="flex radio-box">
            {/* cooking time:{1: 0-30min , 2:  0.5-1 hour, 3: 1-2 hours, 4: 2+ } */}
            <label htmlFor="time">
              <h4 id="cooking-time-radio">cooking time</h4>
              <div className="checkbox-container">
                <input type="radio" name="time" value="0" /> &nbsp; 0-30 minutes{" "}
                <br />
                <input type="radio" name="time" value="1" /> &nbsp; 0.5-1 hour{" "}
                <br />
                <input type="radio" name="time" value="2" /> &nbsp; 1-2 hours{" "}
                <br />
                <input type="radio" name="time" value="3" />
                &nbsp; 2+ <br />
              </div>
            </label>

            <label htmlFor="dish-type">
              <h4>dish type</h4>
              <div className="checkbox-container">
                <input type="radio" name="dish-type" value="italian" /> &nbsp;
                italian <br />
                <input type="radio" name="dish-type" value="fish" />
                &nbsp; fish <br />
                <input type="radio" name="dish-type" value="meat" />
                &nbsp; meat <br />
                <input type="radio" name="dish-type" value="desert" />
                &nbsp; desert <br />
                <input type="radio" name="dish-type" value="salad" />
                &nbsp; salad <br />
                <input type="radio" name="dish-type" value="vegeterian" />
                &nbsp; vegeterian <br />
                <input type="radio" name="dish-type" value="asian" />
                &nbsp; asian <br />
              </div>
            </label>
          </div>
          <div>
            <label>
              <h4>ingrediants</h4>
              <textarea
                className="text-box ingrediants-text-area"
                type="text"
                name="ingrediants"
              />
            </label>
            <label>
              <h4>instructions</h4>
              <textarea
                className="text-box instructions-text-area"
                type="text"
                name="instructions"
              />
            </label>
          </div>
        </div>
        <label htmlFor="img">
          <h4>In a RUSH?!</h4>
          <p>save the link to the recipe and edit it later!</p>
          link: &nbsp;
          <input type="text" name="img" className="text-box" />
        </label>
        <input className="red-round-btn " type="submit" value="save" />
      </form>

      {/* <div className="new-recipe-img-container">
        <img
          className="hero-img"
          src={process.env.PUBLIC_URL + "/assets/new-recipe.png"}
          alt=""
        ></img>
      </div> */}
    </div>
  );
}

export default NewRecipeForm;
