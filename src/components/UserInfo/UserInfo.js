import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./UserInfo.css";
import { auth } from "../../utils/database-config";
import LoginPage from "../../pages/LoginPage/LoginPage";
import Logincard from "../LoginCard/LoginCard";
import UpdateUser from "../UpdateUser/UpdateUser";
import useDelete from "../../hooks/use-delete";
import { signOut } from "firebase/auth";

function UserInfo({ currentUser: user, dispatchUsers }) {
  const navigate = useNavigate();
  const { name, lastName, country, city, email, level, recipes, id } = user;
  const [editMood, setEditMood] = useState(false);
  const [isLogged, setisLogged] = useState(true);

  const { isLoading, error, deleteFromCollection } = useDelete(
    "users",
    dispatchUsers,
    id
  );
  const editProfileHandler = (e) => {
    console.log(e);
    setEditMood((prev) => true);
  };

  const deleteProfileHandler = async () => {
    console.log("delete function");
    await deleteFromCollection();
    await signOut(auth);
    navigate("/home");
  };

  useEffect(() => {
    if (!user) return <LoginPage />;
  }, []);
  return (
    <>
      {editMood && (
        <UpdateUser
          userUid={auth.currentUser.uid}
          setEditMood={setEditMood}
          dispatchUsers={dispatchUsers}
        />
      )}
      <div className="profile-main-box main-content flex">
        <div>
          <div className="flex">
            <div>
              <h4>
                PERSONAL INFO
                <span>
                  <h6 onClick={(e) => editProfileHandler(e)}>EDIT PROFILE</h6>
                </span>
                <span>
                  <h6 onClick={(e) => deleteProfileHandler(e)}>
                    DELETE PROFILE
                  </h6>
                </span>
              </h4>
              <h4 className="red-round-bg">
                {name || "NAME"} {lastName}
              </h4>
              <img
                className="big-profile-pic"
                src={process.env.PUBLIC_URL + "/profile-pic.png"}
                alt=""
              />
            </div>
            <div>
              <p>
                {city && country ? (
                  <span>
                    FROM: {city},{" " + country}
                  </span>
                ) : (
                  <span>Where are you from?</span>
                )}
                <br />
                EMAIL: {email || "not-available"}
                <br />
                {level + " "}
                <i className="fa-solid fa-fire-flame-curved"></i>
                <br />
                Recipes: {recipes?.length || "no recipes yet"}
                <br />
                SHARED: {recipes?.length || "no SHARED recipes yet"}
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
