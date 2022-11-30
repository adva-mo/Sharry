import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./UserInfo.css";
import { auth } from "../../utils/database-config";
import LoginPage from "../../pages/LoginPage/LoginPage";
// import Logincard from "../LoginCard/LoginCard";
// import UpdateUser from "../UpdateUser/UpdateUser";
import useDelete from "../../hooks/use-delete";
import { signOut } from "firebase/auth";
// import { getUserRecipes } from "../../utils/utils";
import useUpdate from "../../hooks/use-update";
import Spinner from "../Spinner/Spinner";
// import Spinner from "../Spinner/Spinner";

function UserInfo({ currentUser: user, dispatchUsers }) {
  const navigate = useNavigate();
  const { name, email, id } = user;
  const [editMood, setEditMood] = useState(false);
  const nameRef = useRef();

  const { isLoading, deleteFromCollection } = useDelete(
    "users",
    dispatchUsers,
    id
  );

  const { isLoading: isUpdatingUser, addToCollection } = useUpdate(
    "users",
    dispatchUsers,
    id
  );

  const editProfileHandler = (e) => {
    if (editMood) {
      addToCollection({ name: nameRef.current.value, email: email });
      setEditMood((prev) => !prev);
    } else setEditMood((prev) => !prev);
  };

  const deleteProfileHandler = async () => {
    console.log("delete function");
    await deleteFromCollection();
    await signOut(auth);
    navigate("/home");
  };

  useEffect(() => {
    if (!user) return <LoginPage />;
  }, [user]);
  if (isLoading || isUpdatingUser) return <Spinner />;
  return (
    <>
      <div className="profile-main-box main-content flex">
        {/* <div> */}
        {/* <div className="flex"> */}
        <div>
          <img
            className="btn-pic"
            src={process.env.PUBLIC_URL + "/assets/user-avatar-new.png"}
            alt=""
          />
        </div>

        <div>
          <p>
            <input
              className="red-round-bg name-input cap"
              defaultValue={name}
              // value={name}
              readOnly={!editMood}
              ref={nameRef}
            />
            {/* <span> */}
            <h6 onClick={(e) => editProfileHandler(e)}>
              {editMood ? (
                <>
                  CONFIRM <i className="fa-solid fa-check"></i>
                </>
              ) : (
                <>
                  EDIT PROFILE <i className="fa-regular fa-pen-to-square"></i>
                </>
              )}{" "}
            </h6>
            {/* </span> */}
            <br />
            EMAIL: {email || "not-available"}
            <br />
            {/* {level + " "} */}
            <i className="fa-solid fa-fire-flame-curved"></i>
            {/* <br />
            Recipes:{" "}
            {getUserRecipes(recipes, auth.currentUser.uid).length > 0
              ? getUserRecipes(recipes, auth.currentUser.uid).length
              : "no recipes yet"}
            <br /> */}
            {/* SHARED: {recipes?.length || "no SHARED recipes yet"} */}
            {/* <span> */}
            <h6 onClick={(e) => deleteProfileHandler(e)}>DELETE PROFILE</h6>
            {/* </span> */}
          </p>
        </div>

        <div className="flex-column add-new-recipe-plus">
          <NavLink to={"/new-recipe"}>
            <img
              className="btn-pic"
              src={process.env.PUBLIC_URL + "/assets/spices-btn.png"}
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
