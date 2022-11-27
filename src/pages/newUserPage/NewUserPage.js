import React, { useContext, useState } from "react";
import NewUserCard from "../../components/NewUserCard/NewUserCard";
import currentLoggedUser from "../../context/loggedUserContext";

function NewUserPage({ dispatchUsers }) {
  const currentUserCtx = useContext(currentLoggedUser);

  return (
    <div className="login-page">
      <img
        className="login-hero-img"
        src={process.env.PUBLIC_URL + "/assets/login-hero.png"}
        alt=""
      />
      <NewUserCard
        userUid={currentUserCtx.uid}
        userEmail={currentUserCtx.email}
        dispatchUsers={dispatchUsers}
      />
    </div>
  );
}

export default NewUserPage;
