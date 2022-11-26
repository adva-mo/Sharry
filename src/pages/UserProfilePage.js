import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../utils/utils";
import UserInfo from "../components/UserInfo/UserInfo";
import UserRecipes from "../components/UserRecipes/UserRecipes";

function UserProfilePage({ users, recipes }) {
  const params = useParams();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser(getUserById(users, params.id));
  }, [users, params.id]);

  return (
    <>
      <div className="flex-column main-content bottom-border">
        {currentUser && <UserInfo currentUser={currentUser} />}
      </div>
      <div className="flex-column main-content bottom-border">
        {currentUser && <UserRecipes userId={params.id} recipes={recipes} />}
      </div>
    </>
  );
}

export default UserProfilePage;
