import React, { useRef } from "react";
import "./NewRecipeForm.css";

//!todo: find a way to capture dish types

function NewRecipeForm() {
  const recipeForm = useRef();
  const dishTypes = useRef();

  const saveHandler = () => {
    // console.log(recipeForm);
    const data = new FormData(recipeForm.current);
    const newRecipe = Object.fromEntries(data);
    // console.log(newRecipe);
    // console.log(dishTypes.current);
    recipeForm.current.reset();
  };
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="new-recipe-form flex-column"
      ref={recipeForm}
    >
      <div>
        <label htmlFor="name">name</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label htmlFor="share">share your recipe?</label>
        <input type="radio" name="share" value="true" />
        yes
        <input type="radio" name="share" value="false" />
        no
      </div>
      <div>
        {/* cooking time:{1: 0-30min , 2:  0.5-1 hour, 3: 1-2 hours, 4: 2+ } */}
        <label htmlFor="cooking-time">cooking time</label>
        <input type="radio" name="cooking-time" value="0" />
        0-30 minutes
        <input type="radio" name="cooking-time" value="1" />
        0.5-1 hour
        <input type="radio" name="cooking-time" value="2" />
        1-2 hours
        <input type="radio" name="cooking-time" value="3" />
        2+
      </div>
      <div>
        <label ref={dishTypes} htmlFor="dish-type">
          dish type
        </label>
        <input type="checkbox" name="dish-type" value="italian" />
        italian
        <input type="checkbox" name="dish-type" value="fish" />
        fish
        <input type="checkbox" name="dish-type" value="soup" />
        soup
        <input type="checkbox" name="dish-type" value="meat" />
        meat
        <input type="checkbox" name="dish-type" value="desert" />
        desert
        <input type="checkbox" name="dish-type" value="rice" />
        rice
        <input type="checkbox" name="dish-type" value="salad" />
        salad
        <input type="checkbox" name="dish-type" value="vegeterian" />
        vegeterian
        <input type="checkbox" name="dish-type" value="bread" />
        bread
      </div>
      <div>
        <label>ingrediants</label>
        <input type="text" name="ingrediants" />
      </div>
      <div>
        <label>instructions</label>
        <textarea type="text" name="instructions" />
      </div>
      <button onClick={saveHandler}>save</button>
    </form>
  );
}

export default NewRecipeForm;
