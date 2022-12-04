import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../utils/database-config";
import { signOut } from "firebase/auth";
import LoginPage from "../../pages/LoginPage/LoginPage";
import useDelete from "../../hooks/use-delete";
import useUpdate from "../../hooks/use-update";
import Spinner from "../Spinner/Spinner";
import "./UserInfo.css";

function UserInfo({ currentUser: user, dispatchUsers }) {
  const navigate = useNavigate();
  const { name, email, id } = user;
  const [editMood, setEditMood] = useState(false);
  const nameRef = useRef();

  const { isLoading: isDeleting, deleteFromCollection } = useDelete(
    "users",
    dispatchUsers,
    id
  );

  const { isLoading: isUpdatingUser, addToCollection } = useUpdate(
    "users",
    dispatchUsers,
    id
  );

  const editProfileHandler = async (e) => {
    if (editMood) {
      await addToCollection({ name: nameRef.current.value, email: email });
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
  return (
    <>
      {isDeleting && <Spinner />}
      {isUpdatingUser && <Spinner />}
      <div className="profile-main-box main-content flex">
        <div>
          <img
            className="btn-pic"
            src="https://firebasestorage.googleapis.com/v0/b/sharry-1319e.appspot.com/o/assets%2Fuser-avatar.png?alt=media&token=7e45390b-7805-4d0b-a31b-508583923459"
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
            <h6 onClick={(e) => deleteProfileHandler(e)}>DELETE PROFILE</h6>
            {/* </span> */}
          </p>
        </div>

        <div className="flex-column add-new-recipe-plus">
          <NavLink to={"/new-recipe"}>
            <img
              className="btn-pic plus-btn"
              src="https://firebasestorage.googleapis.com/v0/b/sharry-1319e.appspot.com/o/assets%2Fspices-btn.png?alt=media&token=57a1a540-2453-4347-8615-26db7d9548be"
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
