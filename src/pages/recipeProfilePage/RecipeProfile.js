import React, { useEffect, useRef, useState } from "react";
import "./RecipeProfile.css";
import RecipePreview from "../../components/RecipePreview/RecipePreview";
import { getRecipeById } from "../../utils/utils";
import { useNavigate, useParams } from "react-router-dom";
import useDelete from "../../hooks/use-delete";
import { auth } from "../../utils/database-config";
import useUpdate from "../../hooks/use-update";
import Spinner from "../../components/Spinner/Spinner";

function RecipeProfile({ recipes, dispatchRecipes }) {
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [editMood, setEditMood] = useState(false);

  const params = useParams();
  const navigate = useNavigate();
  const instructionsRef = useRef();
  const ingrediantsRef = useRef();

  const { deleteFromCollection, isLoading } = useDelete(
    "recipes",
    dispatchRecipes,
    params.id
  );

  const { addToCollection } = useUpdate("recipes", dispatchRecipes, params.id);

  useEffect(() => {
    if (!recipes) return navigate("/");
    setCurrentRecipe(getRecipeById(recipes, params.id));
  }, [recipes, params.id, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.id]);

  const deleteHandler = async () => {
    await deleteFromCollection();
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

  if (currentRecipe)
    return (
      <>
        {console.log(currentRecipe)}
        {isLoading && <Spinner />}
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
              <img
                className="big-recipe-img"
                src={
                  currentRecipe.img ||
                  "https://firebasestorage.googleapis.com/v0/b/sharry-1319e.appspot.com/o/assets%2Fdishes%2Ffood.jpg?alt=media&token=5281595d-d7ec-4332-86f3-17ddf95a4a89"
                }
                alt=""
              />
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
          {currentRecipe.owner === auth.currentUser?.uid && (
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
              {currentRecipe.link && (
                <button
                  className="blue-btn"
                  onClick={() =>
                    window.open(currentRecipe.link, "_blank", "noreferrer")
                  }
                >
                  LINK
                </button>
              )}
            </div>
          )}
          <div className="main-content instructions-container">
            <h3>INSTRUCTIONS:</h3>
            <textarea
              className={editMood ? "main-content edit" : "main-content"}
              ref={instructionsRef}
              type="text"
              defaultValue={currentRecipe.instructions}
              readOnly={!editMood}
              style={{
                backgroundColor: "rgba(241, 241, 241, 1)",
                width: "100%",
              }}
            />
          </div>
        </div>
        <h2 className="sub-title">MORE DISHES</h2>
        <div className="flex more-recipes recipes-container">
          {recipes?.map((recipe) => {
            //
            return <RecipePreview key={recipe.id} {...recipe} id={recipe.id} />;
          })}
        </div>
      </>
    );
}

export default RecipeProfile;
