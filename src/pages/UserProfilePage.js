import React from "react";

import UserInfo from "../components/UserInfo/UserInfo";
import UserRecipes from "../components/UserRecipes/UserRecipes";
//todo: use params to capture user id and get hes object from state
function UserProfilePage() {
  return (
    <>
      <div className="flex-column main-content bottom-border">
        <UserInfo />
      </div>
      <div className="flex-column main-content bottom-border">
        {/* <UserInfo /> */}
        <UserRecipes />
      </div>
    </>
  );
}

export default UserProfilePage;
