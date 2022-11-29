export const getUserById = (users, id) => {
  return users.find((user) => {
    // console.log(user);
    return user.id === id;
  });
};

export const getUserRecipes = (recipes, userId) => {
  const userID = userId + "";
  return recipes.filter((recipe) => {
    return recipe.owner === userID;
  });
};

export const getRecipeById = (recipes, id) => {
  return recipes.find((recipe) => {
    return recipe.id === id;
  });
};
