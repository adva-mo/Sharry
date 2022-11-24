export const recipesReducers = (state, action) => {
  switch (action.type) {
    case "GET-RECIPES":
      return [...action.playload];
    case "DELETE-RECIPE":
      return deleteRecipe(action.playload, state);
    case "ADD-RECIPE":
      return addRecipe(action.playload, state);
    case "EDIT-RECIPE":
      return editRecipe(action.playload, state);
    default:
      return state;
  }
};

export const deleteRecipe = (id, state) => {};

export const addRecipe = (obj, state) => {};

export const editRecipe = ({ recipeObj, id }, state) => {};
