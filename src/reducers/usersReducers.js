export const usersReducer = (state, action) => {
  switch (action.type) {
    case "GET-USERS":
      return [...action.playload];
    case "DELETE-USER":
      return deleteUser(action.playload, state);
    case "ADD-USER":
      return addUser(action.playload, state);
    case "EDIT-USER":
      return editUser(action.playload, state);
    default:
      return state;
  }
};

export const deleteUser = (id, state) => {};

export const addUser = (obj, state) => {};

export const editUser = ({ recipeObj }, state) => {};
