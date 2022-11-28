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
