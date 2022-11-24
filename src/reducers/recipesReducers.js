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

export const deleteRecipe = (id, state) => {};

export const addRecipe = (obj, state) => [...state, obj];

export const editRecipe = ({ recipeObj, id }, state) => {};
