import { setDoc, updateDoc } from "firebase/firestore";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useAdd from "../../hooks/use-add";

function NewUserCard({ userUid, userEmail, dispatchUsers }) {
  console.log(userUid);
  const myForm = useRef();
  const navigate = useNavigate();
  let newUser;

  const { addToCollection, isLoading, error } = useAdd(
    "users",
    dispatchUsers,
    userUid,
    setDoc
  );

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      // const data = new FormData(myForm.current);
      newUser = Object.fromEntries(new FormData(myForm.current));
      console.log("saving new user data");
      await addToCollection({ ...newUser, email: userEmail, recipes: [] });
      dispatchUsers({
        type: "ADD",
        playload: { ...newUser, email: userEmail, recipes: [] },
      });
      // navigate(`/users/${userUid}`); //todo: navigate to user profile page
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
