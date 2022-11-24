import React from "react";
import { NavLink } from "react-router-dom";
import "./UserInfo.css";

function UserInfo() {
  return (
    <div className="profile-main-box main-content flex">
      <div>
        <div className="flex">
          <div>
            <h4>PERSONAL INFO</h4>
            <h4 className="red-round-bg">dana</h4>
            <img
              className="big-profile-pic"
              src={process.env.PUBLIC_URL + "/profile-pic.png"}
            />
          </div>
          <div>
            <p>EDIT PROFILE</p>
            <p>MY RECIEPS</p>
            <p>SAVED</p>
            <p>SHARED</p>
          </div>
        </div>
      </div>
      <div className="flex-column">
        <img
          className="btn-pic"
          src={process.env.PUBLIC_URL + "/btn.png"}
          alt="mypic"
        />
        <NavLink to={"/new-recipe"}>add new recipe!</NavLink>
      </div>
    </div>
  );
}

export default UserInfo;
