//! crud:
//  1. add new user (after register)-> newUserForm component
//  2. edit user (from profile)
//  3. delete user (from profile) ->delete account
//  4. delete recipe (from recipe)

//! logic
//  cokking time help function
//  function that returns 6 recipes randomlly
//  display recipe info on recipe profile page
//  hide api keys
//  add dinamic response to the main pages based on user is logged/not
//  error & loading components
//  search dish feature

//! extra
//  save other user recipes
//  add like to recipes
//  upload photo

//! desgin:
//  underlne navbar links
//  buttons didabled classes
//  home page
//  spinner of food

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
};
