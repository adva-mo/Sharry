export const getUserById = (users, id) => {
  return users.find((user) => {
    // console.log(user);
    return user.id === id;
  });
};

export const getUserRecipes = (recipes, userId) => {
  return recipes.filter((recipe) => {
    return recipe.owner === userId;
  });
};

export const getRecipeById = (recipes, id) => {
  return recipes.find((recipe) => {
    return recipe.id === id;
  });
};
