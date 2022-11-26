import React, { useState } from "react";
import NewUserCard from "../../components/NewUserCard/NewUserCard";
function NewUserPage() {
  const [userData, setUserData] = useState(null);

  return (
    <div className="login-page">
      <img
        className="login-hero-img"
        src={process.env.PUBLIC_URL + "/assets/login-hero.png"}
        alt=""
      />
      <NewUserCard setUserData={setUserData} />
    </div>
  );
}

export default NewUserPage;
