//! logic
//  hide api keys
// how to skip the top of the page

//!becaus of the spinner in user profile page the state is getting lost update isnt saved

//! extra
//  search dishes by terms
//  save other user recipes
//  add like to recipes
//  upload photo

//! design:
//  fix sample pictures all over the app
//  when editing, make it clear to the user recipe profile
//  responsive !
//  in recipe profile- make pic smaller and move button to the right

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
