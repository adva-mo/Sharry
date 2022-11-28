//! crud:
//  2. edit user (from profile)
//  3. delete user (from profile) ->delete account
//  4. delete + edit recipe (from recipeprofile)

//! logic
//* check why renders twice
//  display recipe info on recipe profile page
//  hide api keys
//  error component
//  search dish feature

//! extra
//  function that returns 6 recipes randomlly
//  cooking time help function
//  save other user recipes
//  add like to recipes
//  upload photo

//! design:
//  underlne navbar links
//  buttons didabled classes
//  home page

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
