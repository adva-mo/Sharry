//! logic
//  hide api keys
//  error component

//! extra
// search dishes by terms
//  save other user recipes
//  add like to recipes
//  upload photo

//! design:
//  buttons in profile page
//  underlne navbar links
//  recipe preview
//  when editing, sign the user
//  responsive

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
