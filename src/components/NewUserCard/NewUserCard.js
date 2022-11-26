import React, { useRef, useContext } from "react";
// import "./NewUserForm.css";
// import currentLoggedUser from "../../context/loggedUserContext";

function NewUserCard({ setUserData }) {
  const myForm = useRef();
  //   const loggedUserCtx = useContext(currentLoggedUser);
  //   console.log(loggedUserCtx);

  const saveHandler = (e) => {
    e.preventDefault();
    const data = new FormData(myForm.current);
    const newUser = Object.fromEntries(data);
    console.log(newUser);
  };
  return (
    <form ref={myForm} className="login-card">
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
      <button onClick={saveHandler} className="blue-btn">
        save
      </button>
    </form>
  );
}

export default NewUserCard;
