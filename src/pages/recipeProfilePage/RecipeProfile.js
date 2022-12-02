import React, { useEffect, useRef, useState } from "react";
import "./RecipeProfile.css";
import RecipePreview from "../../components/RecipePreview/RecipePreview";
import { getRecipeById } from "../../utils/utils";
import { useNavigate, useParams } from "react-router-dom";
import useDelete from "../../hooks/use-delete";
import { auth, storage } from "../../utils/database-config";
import useUpdate from "../../hooks/use-update";
import Spinner from "../../components/Spinner/Spinner";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import UseUploadImage from "../../hooks/use-uploadImage";

function RecipeProfile({ recipes, dispatchUsers, dispatchRecipes }) {
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [editMood, setEditMood] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const params = useParams();
  const navigate = useNavigate();
  const instructionsRef = useRef();
  const ingrediantsRef = useRef();

  const imageListRef = ref(storage, `recipes-pics/${currentRecipe?.id}`);

  const { deleteFromCollection, isLoading } = useDelete(
    "recipes",
    dispatchRecipes,
    params.id
  );

  const { addToCollection } = useUpdate("recipes", dispatchRecipes, params.id);

  const {
    uploadImage,
    isLoading: isUploadingImage,
    eror: uploadingImageError,
  } = UseUploadImage(
    `recipes-pics/${currentRecipe?.id}/${imageUpload?.name + v4()}`,
    imageUpload
  );

  useEffect(() => {
    setCurrentRecipe(getRecipeById(recipes, params.id));
  }, [recipes, params.id]);

  useEffect(() => {
    if (!currentRecipe) return;
    listAll(imageListRef)
      .then((response) => {
        getDownloadURL(response.items[0]).then((url) => setImageUrl(url));
      })
      .catch((e) => console.log(e.message));
  }, [currentRecipe]);

  const deleteHandler = async () => {
    console.log("delete recipe");
    await deleteFromCollection();
    console.log("sucess");
    navigate(`/users/${auth.currentUser.uid}`);
  };
  const editHandler = async () => {
    if (editMood === true) {
      await addToCollection({
        instructions: instructionsRef.current?.value,
        ingrediants: ingrediantsRef.current?.value,
      });
      setEditMood((prev) => !prev);
    } else setEditMood((prev) => !prev);
  };

  // const uploadImage = () => {
  //   if (imageUpload === null) return;
  //   const imageRef = ref(
  //     storage,
  //     `recipes-pics/${currentRecipe.id}/${imageUpload.name + v4()}`
  //   );
  //   uploadBytes(imageRef, imageUpload)
  //     .then(() => {
  //       alert("image uploaded!");
  //     })
  //     .catch((e) => console.log(e.message));
  // };

  if (currentRecipe)
    return (
      <>
        {isLoading || (isUploadingImage && <Spinner />)}
        <div className="main-content bottom-border gap recipe-page">
          <div className="flex-column gap">
            <h1 className="cap">{currentRecipe.name || "DISH NAME"}</h1>
            <h2>Delicious {currentRecipe.type} dish!</h2>
          </div>
          <div className="flex recipe-settings">
            <div>
              <i className="fa-regular fa-clock red"></i> &nbsp;{" "}
              {currentRecipe.time || "0-30 MINUTES"}
            </div>
            <div>
              <i className="fa-regular fa-star red"></i>&nbsp;LIKES &nbsp;
              <span className="soon">soon...</span>
            </div>
            <div>
              <i className="fa-regular fa-pen-to-square red"></i>&nbsp; REVIEWS
              &nbsp;
              <span className="soon">soon...</span>
            </div>
          </div>

          <div className="recipe-full-profile">
            <div className="big-recipe-img-container">
              <img className="big-recipe-img" src={imageUrl} alt="" />
              <div className="ingrediants-container ">
                <span className={editMood ? "ing-title" : "ing-title"}>
                  ingrediants: <br />
                </span>
                <textarea
                  ref={ingrediantsRef}
                  type="text"
                  defaultValue={currentRecipe.ingrediants}
                  readOnly={!editMood}
                  className={editMood ? "edit" : ""}
                />
              </div>
            </div>
          </div>
          {currentRecipe.owner === auth.currentUser.uid && (
            <div className="flex gap top-gap">
              <button
                className="blue-btn "
                onClick={() => {
                  editHandler();
                }}
              >
                {editMood ? "CONFIRM" : "EDIT"}
              </button>
              <button
                className="blue-btn"
                onClick={() => {
                  deleteHandler();
                }}
              >
                DELETE
              </button>
              <button onClick={uploadImage}>upload image</button>
              <input
                type="file"
                onChange={(e) => setImageUpload(e.target.files[0])}
              />
            </div>
          )}
          <div className="main-content instructions-container">
            <h3>INSTRUCTIONS:</h3>
            <textarea
              // className="main-content"
              className={editMood ? "main-content edit" : "main-content"}
              ref={instructionsRef}
              type="text"
              defaultValue={currentRecipe.instructions}
              readOnly={!editMood}
            />
          </div>
        </div>
        <h2 className="sub-title">MORE DISHES</h2>
        <div className="recipes-container flex">
          {recipes?.map((recipe) => {
            return <RecipePreview key={recipe.id} {...recipe} id={recipe.id} />;
          })}
        </div>
      </>
    );
}

export default RecipeProfile;
