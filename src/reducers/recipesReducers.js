import { getRecipeById } from "../utils/utils";
export const recipesReducers = (state, action) => {
  switch (action.type) {
    case "GET":
      return [...action.playload];
    case "DELETE":
      return deleteRecipe(action.playload, state);
    case "ADD":
      return addRecipe(action.playload, state);
    case "EDIT":
      return editRecipe(action.playload, state);

    default:
      return state;
  }
};

export const deleteRecipe = (id, state) => {
  console.log("in delete");
  return state.filter((member) => {
    return id !== member.id;
  });
};

export const addRecipe = (obj, state) => [...state, obj];

export const editRecipe = ({ id, data }, state) => {
  const recipe = getRecipeById(state, id);
  const newRecipe = { ...recipe, ...data };
  const filtered = state.filter((recipe) => {
    return recipe.id !== id;
  });
  return [...filtered, newRecipe];
};
