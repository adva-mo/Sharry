export const getUserById = (arr, id) => {
  return arr.find((user) => {
    return user.id === id;
  });
};
