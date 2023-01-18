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
  let currentUserProfile;
  if (users) currentUserProfile = getUserById(users, params.id);

  useEffect(() => {
    if (!users || !params.id) navigate("/home");
    if (currentUserProfile) setCurrentUser(currentUserProfile);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {!currentUser && users && (
        <NewUserCard
          dispatchUsers={dispatchUsers}
          setCurrentUser={setCurrentUser}
          users={users}
        />
      )}
      {currentUser && (
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
              <UserRecipes userId={params?.id} recipes={recipes} />
            </div>
          </>
        </div>
      )}
    </>
  );
}

export default UserProfilePage;
