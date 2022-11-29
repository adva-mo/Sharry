//! crud:
//  4. delete + edit recipe (from recipeprofile)

//! logic

//* function that gets all user recipes from recipes!
//  display recipe info on recipe profile page
//  hide api keys
//  error component
//  function to retrieve all user recipes from recipes state and implement in user profile page
//  search dish feature

//! extra
//  cooking time help function
//  save other user recipes
//  add like to recipes
//  upload photo

//! design:
//  underlne navbar links

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
