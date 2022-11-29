import { doc, updateDoc } from "firebase/firestore";
import React, { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { db } from "../../utils/database-config";
import Spinner from "../Spinner/Spinner";

function UpdateUser({ userUid, setEditMood }) {
  const [isLoading, setIsLoading] = useState(false);
  console.log(userUid);
  const myForm = useRef();
  //   const navigate = useNavigate();

  const submitHandler = async (e) => {
    setIsLoading((prev) => true);
    try {
      e.preventDefault();
      const updateInfo = Object.fromEntries(new FormData(myForm.current));
      console.log("saving new user data");
      await updateDoc(doc(db, "users", userUid), { ...updateInfo });

      //?add here dispaych functions
      // navigate("/explore"); //todo: navigate to user profile page
      setIsLoading((prev) => false);
      setEditMood((prev) => false);
    } catch (e) {
      setIsLoading((prev) => false);
      console.log(e);
    }
  };
  if (isLoading) return <Spinner />;
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

export default UpdateUser;
