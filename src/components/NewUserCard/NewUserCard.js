import { setDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAdd from "../../hooks/use-add";
import { auth } from "../../utils/database-config";
import { getUserById } from "../../utils/utils";

function NewUserCard({
  userUid,
  userEmail,
  dispatchUsers,
  setCurrentUser,
  users,
}) {
  const myForm = useRef();
  const navigate = useNavigate();
  let newUser;
  console.log(users);
  const { addToCollection, isLoading, error } = useAdd(
    "users",
    dispatchUsers,
    auth.currentUser.uid,
    setDoc
  );
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      newUser = Object.fromEntries(new FormData(myForm.current));
      console.log("saving new user data");
      await addToCollection({
        ...newUser,
        email: auth.currentUser.email,
        recipes: [],
      });
      await dispatchUsers({
        type: "ADD",
        playload: {
          ...newUser,
          email: auth.currentUser.email,
          recipes: [],
          id: auth.currentUser.uid,
        },
      });
      setCurrentUser((prev) => getUserById(users, auth.currentUser.id));
      // setisProfileReady((prev) => true);
      // navigate(`/users/${auth.currentUser.uid}`); //todo: navigate to user profile page
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      ref={myForm}
      onSubmit={(e) => submitHandler(e)}
      className="login-card"
    >
      <h3>set up your profile and start sharrying!</h3>
      <div>
        <label htmlFor="name">enter your name</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label htmlFor="lastName">enter your last name</label>
        <input type="text" name="lastName" />
      </div>
      <div>
        <label htmlFor="level">rate your cooking skills</label>
        <input type="range" name="level" />
      </div>
      <div>
        <label htmlFor="img">enter link for your profile picture</label>
        <input type="text" name="img" />
      </div>
      <span>where are you from?</span>
      <div>
        <label htmlFor="country">country</label>
        <input type="text" name="country" />
      </div>
      <div>
        <label htmlFor="city">city</label>
        <input type="text" name="city" />
      </div>
      <input type="submit" className="blue-btn" value="save" />
    </form>
  );
}

export default NewUserCard;
