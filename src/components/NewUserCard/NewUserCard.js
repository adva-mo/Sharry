import { setDoc } from "firebase/firestore";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useAdd from "../../hooks/use-add";
import { auth } from "../../utils/database-config";
import { getUserById } from "../../utils/utils";
import Spinner from "../Spinner/Spinner";
import Error from "../error/Error";

function NewUserCard({ dispatchUsers, setCurrentUser, users }) {
  const myForm = useRef();
  const navigate = useNavigate();
  let newUser;

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
      });
      await dispatchUsers({
        type: "ADD",
        playload: {
          ...newUser,
          email: auth.currentUser.email,
          id: auth.currentUser.uid,
        },
      });
      setTimeout(() => {
        navigate(``);
      }, 0);
      setCurrentUser((prev) => getUserById(users, auth.currentUser.id));
    } catch (e) {
      console.log(e);
    }
  };
  if (isLoading) return <Spinner />;
  if (error) return <Error msg={error} />;

  return (
    <form
      ref={myForm}
      onSubmit={(e) => submitHandler(e)}
      className="login-card"
    >
      <h3>one last step...</h3>
      <div>
        <label htmlFor="name">enter your name</label>
        <input type="text" name="name" />
      </div>

      <input type="submit" className="blue-btn" value="save" />
    </form>
  );
}

export default NewUserCard;
