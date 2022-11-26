import React from "react";
import { NavLink } from "react-router-dom";
import "./UserInfo.css";

function UserInfo({ currentUser: user }) {
  const { name, lastName, country, city, email } = user;
  return (
    <>
      <div className="profile-main-box main-content flex">
        <div>
          <div className="flex">
            <div>
              <h4>
                PERSONAL INFO
                <span>
                  <h6>EDIT PROFILE</h6>
                </span>
              </h4>
              <h4 className="red-round-bg">
                {name} {lastName}
              </h4>
              <img
                className="big-profile-pic"
                src={process.env.PUBLIC_URL + "/profile-pic.png"}
                alt=""
              />
            </div>
            <div>
              <p>
                FROM: {city},{country}
              </p>
              EMAIL: {email || "not-available"}
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
    </>
  );
}

export default UserInfo;
