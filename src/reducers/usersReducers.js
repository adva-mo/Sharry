export const usersReducers = (state, action) => {
  switch (action.type) {
    case "GET":
      return [...action.playload];
    case "DELETE":
      return deleteUser(action.playload, state);
    case "ADD":
      return addUser(action.playload, state);
    case "EDIT":
      return editUser(action.playload, state);
    default:
      return state;
  }
};

export const deleteUser = (id, state) => {};

export const addUser = (obj, state) => {};

export const editUser = ({ recipeObj }, state) => {};
