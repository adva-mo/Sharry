import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./UserInfo.css";

function UserInfo({ currentUser: user }) {
  const navigate = useNavigate();
  const { name, lastName, country, city, email, level, recipes } = user;

  const editProfileHandler = (e) => {
    console.log(e);
    navigate("/new-user");
  };

  return (
    <>
      <div className="profile-main-box main-content flex">
        <div>
          <div className="flex">
            <div>
              <h4>
                PERSONAL INFO
                <span>
                  <h6 onClick={(e) => editProfileHandler(e)}>EDIT PROFILE</h6>
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
                FROM: {city},{" " + country}
                <br />
                EMAIL: {email || "not-available"}
                <br />
                {level + " "}
                <i className="fa-solid fa-fire-flame-curved"></i>
                <br />
                Number of recipes: {recipes.length}
                <br />
                SAVED
                <br />
                SHARED
              </p>
            </div>
          </div>
        </div>
        <div className="flex-column">
          <NavLink to={"/new-recipe"}>
            <img
              className="btn-pic"
              src={process.env.PUBLIC_URL + "/btn.png"}
              alt="mypic"
            />
            <br />
            add new recipe!
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
