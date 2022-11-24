import React from "react";
import { NavLink } from "react-router-dom";

function UserProfile() {
  return (
    <div>
      <h2>UserProfile</h2>
      <NavLink to={"/new-recipe"}>add new recipe!</NavLink>
    </div>
  );
}

export default UserProfile;
