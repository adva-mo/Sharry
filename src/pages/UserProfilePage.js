import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../utils/utils";
import UserInfo from "../components/UserInfo/UserInfo";
import UserRecipes from "../components/UserRecipes/UserRecipes";
import NewUserCard from "../components/NewUserCard/NewUserCard";

function UserProfilePage({ users, recipes, dispatchUsers }) {
  const params = useParams();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const currentUserProfile = getUserById(users, params.id);

  // console.log(users);

  useEffect(() => {
    if (!params.id) navigate("/home");
    // console.log("in use effect");
    if (currentUserProfile) setCurrentUser(currentUserProfile);
    // setCurrentUser(getUserById(users, params.id));
    if (currentUser) console.log("ok"); // eslint-disable-next-line
  }, []);
  // console.log(currentUser);
  return (
    <>
      {!currentUser ? (
        <NewUserCard
          dispatchUsers={dispatchUsers}
          setCurrentUser={setCurrentUser}
          users={users}
        />
      ) : (
        <div>
          <>
            <div className="flex-column main-content bottom-border">
              <UserInfo
                currentUser={currentUser}
                users={users}
                dispatchUsers={dispatchUsers}
              />
            </div>
            <div className="flex-column main-content bottom-border">
              <UserRecipes userId={params.id} recipes={recipes} />
            </div>
          </>
        </div>
      )}
    </>
  );
}

export default UserProfilePage;
