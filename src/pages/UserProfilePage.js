import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../utils/utils";
import UserInfo from "../components/UserInfo/UserInfo";
import UserRecipes from "../components/UserRecipes/UserRecipes";

function UserProfilePage({ users, recipes }) {
  const params = useParams();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  // console.log(params.id);
  // console.log(users);

  useEffect(() => {
    if (users) setCurrentUser(getUserById(users, params.id));
    else navigate("/home"); // eslint-disable-next-line
  }, [users, params.id]);

  if (currentUser)
    return (
      <>
        <div className="flex-column main-content bottom-border">
          <UserInfo currentUser={currentUser} users={users} />
        </div>
        <div className="flex-column main-content bottom-border">
          <UserRecipes userId={params.id} recipes={recipes} />
        </div>
      </>
    );
}

export default UserProfilePage;
