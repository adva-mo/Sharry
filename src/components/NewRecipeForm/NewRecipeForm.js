import { getDownloadURL, ref } from "firebase/storage";
import React, { useRef, useState } from "react";
import UseUploadImage from "../../hooks/use-uploadImage";
import { auth, storage } from "../../utils/database-config";
import { v4 } from "uuid";
import "./NewRecipeForm.css";

function NewRecipeForm({ setNewRecipe, newRecipeId }) {
  const [imageToUpload, setImageToUpload] = useState(null);
  const recipeForm = useRef();
  const currentUserId = auth.currentUser?.uid || null;

  const { isLoading, error, uploadImage } = UseUploadImage();

  const saveHandler = async (e) => {
    const imageId = v4();
    const imageRef = ref(
      storage,
      `recipes-pics/${newRecipeId}/${imageToUpload.name + imageId}`
    );

    try {
      e.preventDefault();
      await uploadImage(
        imageToUpload,
        `recipes-pics/${newRecipeId}/${imageToUpload.name + imageId}`
      );
      const url = await getDownloadURL(imageRef);
      console.log(url);
      const newRecipe = Object.fromEntries(new FormData(recipeForm.current));
      recipeForm.current.reset();
      console.log(newRecipe);
      setNewRecipe((prev) => ({
        ...newRecipe,
        owner: currentUserId,
        img: url,
      }));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex new-recipe-container">
      <form
        onSubmit={saveHandler}
        className="new-recipe-form flex-column"
        ref={recipeForm}
      >
        <label htmlFor="name">
          <input
            className="text-box dish-name-input"
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
        <div className="flex recipe-settings-box">
          <div className="radio-input-box">
            <label htmlFor="time">
              <h4 id="cooking-time-radio">cooking time</h4>
              <div className="checkbox-container">
                <input type="radio" name="time" value="0-30 MIN" /> &nbsp; 0-30
                minutes <br />
                <input type="radio" name="time" value="0.5-1 hour" /> &nbsp;
                0.5-1 hour <br />
                <input type="radio" name="time" value="1-2 hours" /> &nbsp; 1-2
                hours <br />
                <input type="radio" name="time" value="2+ hours" />
                &nbsp; 2+ <br />
              </div>
            </label>

            <label className="dish-type-lable" htmlFor="dish-type">
              <h4>dish type</h4>
              <div className="checkbox-container">
                <input type="radio" name="type" value="italian" /> &nbsp;
                italian <br />
                <input type="radio" name="type" value="fish" />
                &nbsp; fish <br />
                <input type="radio" name="type" value="meat" />
                &nbsp; meat <br />
                <input type="radio" name="type" value="desert" />
                &nbsp; desert <br />
                <input type="radio" name="type" value="salad" />
                &nbsp; salad <br />
                <input type="radio" name="type" value="vegeterian" />
                &nbsp; vegeterian <br />
                <input type="radio" name="type" value="asian" />
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
        {/* <label htmlFor="img">
          <h4>In a RUSH?!</h4>
          <p>save the link to the recipe and edit it later!</p>
          link: &nbsp;
          <input type="text" name="img" className="text-box" />
        </label> */}
        <label htmlFor="img">
          <p>show us your recipe!</p>
          link: &nbsp;
          <input
            onChange={(e) => setImageToUpload(() => e.target.files[0])}
            type="file"
            // name="img"
            className="text-box"
          />
        </label>
        <input className="red-round-btn " type="submit" value="save" />
      </form>
      <div />
    </div>
  );
}

export default NewRecipeForm;
