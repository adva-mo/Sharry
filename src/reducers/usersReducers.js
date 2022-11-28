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

export const addUser = (obj, state) => [...state, obj];

export const editUser = ({ recipeObj }, state) => {};

export const addRecipeToUser = (config, state) => {
  let newRecipesArray = [];
  let updatedUser;
  console.log(config);
  console.log(state);
  return state.map((user, i) => {
    if (user.id === config.userId) {
      console.log("ok");
      newRecipesArray = [...user.recipes, config.recipeId];
      return { ...user, recipes: [...newRecipesArray] };
    } else return user;
  });
};
