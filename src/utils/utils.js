export const getUserById = (users, id) => {
  return users.find((user) => {
    return user.id === id;
  });
};

export const getUserRecipes = (recipes, userId) => {
  console.log("get user recipes");
  return recipes.filter((recipe) => {
    return recipe.owner === userId;
  });
};

export const getRecipeById = (recipes, id) => {
  return recipes.find((recipe) => {
    return recipe.id === id;
  });
};

export const filteredRecipes = (recipes, searchValue) => {
  // eslint-disable-next-line
  return recipes.filter((recipe) => {
    if (
      recipe.share === ("true" || true) &&
      recipe.name.toLowerCase().includes(searchValue.toLowerCase())
    )
      return recipe;
  });
  // return filtered;
};
