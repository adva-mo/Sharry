export const getUserById = (users, id) => {
  return users.find((user) => {
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

export const filteredRecipes = (recipes, searchValue) => {
  console.log(recipes);
  const filtered = recipes.filter((recipe) => {
    if (
      recipe.share === ("true" || true) &&
      recipe.name.toLowerCase().includes(searchValue)
    )
      return recipe;
  });
  return filtered;
};
