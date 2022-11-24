import React from "react";

import UserInfo from "../components/UserInfo/UserInfo";
//todo: use params to capture user id and get hes object from state
function UserProfilePage() {
  return (
    <div className="flex-column main-content bottom-border">
      <UserInfo />
    </div>
  );
}

export default UserProfilePage;
