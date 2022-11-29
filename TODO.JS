//! crud:
// delete recipe from user recipes (db and state)
// check if db is updated when user adding new recipe (recipes array)
// edit recipe (from recipeprofile)

//! logic

//  hide api keys
//  error component
//  function to retrieve all user recipes from recipes state and implement in user profile page
//  search dish feature
//  funcion that returns 6 random recipes

//! extra
//  cooking time help function
//  save other user recipes
//  add like to recipes
//  upload photo

//! design:
//  underlne navbar links
// soon sections

//! data straucture:
const recipe = {
  id: "some-id",
  owner: "userid",
  isShared: false,
  level: 3, // out of 3 probably
  type: "italian",
  ingrediants: ["pasta", "tomato", "olive"],
  dishImg: "",
  recipeImg: "",
  time: 0,
  name: "",
};
const user = {
  name: "",
  lastName: "",
  level: " begginer / su-chef / chef ",
  email: "",
  img: "profile-pic",
  city: "",
  country: "",
  reciepes: ["id", "id"],
};
