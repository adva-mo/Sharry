import { getUserById, getUserRecipes } from "../utils/utils";

export const usersReducers = (state, action) => {
  switch (action.type) {
    case "GET":
      return [...action.playload];
    case "DELETE":
      return deleteUser(action.playload, state);
    case "ADD":
      console.log(action);
      return addUser(action.playload, state);
    case "EDIT":
      return editUser(action.playload, state);
    case "ADD-RECIPE-TO-USER":
      return addRecipeToUser(action.playload, state);
    default:
      return state;
  }
};

export const deleteUser = (id, state) => {
  console.log("in delete");
  return state.filter((member) => {
    return id !== member.id;
  });
};

export const addUser = (obj, state) => {
  const userExist = getUserById(state, obj.id);
  if (!userExist) {
    return [...state, obj];
  } else {
    const filtered = state.filter((user) => {
      return user.id !== obj.id;
    });
    console.log("user alreday exist, filteres users:");
    console.log(filtered);
  }
  return [state];
};

export const editUser = (config, state) => {
  const recipes = getUserRecipes(state, config.id);
  const filtered = state.filter((user) => {
    return user.id !== config.id;
  });
  const merged = { ...config.data, id: config.id, recipes: [...recipes] };
  console.log(merged);
  return [...filtered, merged];
};

export const addRecipeToUser = (config, state) => {
  let newRecipesArray = [];
  return state.map((user, i) => {
    if (user.id === config.userId) {
      newRecipesArray = [...user.recipes, config.recipeId];
      return { ...user, recipes: [...newRecipesArray] };
    } else return user;
  });
};
