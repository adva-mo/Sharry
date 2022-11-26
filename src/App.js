import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/ExplorePage/ExplorePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NewRecipePage from "./pages/NewRecipePage";
import RecipeProfile from "./pages/recipeProfilePage/RecipeProfile";
import { recipesReducers } from "./reducers/recipesReducers.js";
import { useReducer, useState } from "react";
import { usersReducers } from "./reducers/usersReducers";
import { auth } from "./utils/database-config";
import "./App.css";
import "./utils/utils.css";
import UserProfilePage from "./pages/UserProfilePage";
import { onAuthStateChanged } from "firebase/auth";
import currentLoggedUser from "./context/loggedUserContext";
import NewUserPage from "./pages/newUserPage/NewUserPage";

function App() {
  const [recipes, dispatchRecipes] = useReducer(recipesReducers, null);
  const [users, dispatchUsers] = useReducer(usersReducers, null);
  const [loggedUser, setLoggedUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setLoggedUser(currentUser);
  });

  return (
    <>
      <currentLoggedUser.Provider value={(loggedUser, setLoggedUser)}>
        <Navbar />
        <>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="*" element={<Navigate replace to="/home" />} />
            <Route
              path="/home"
              element={
                <Home
                  recipes={recipes}
                  dispatchRecipes={dispatchRecipes}
                  users={users}
                  dispatchUsers={dispatchUsers}
                />
              }
            />
            <Route
              path="/explore"
              element={<Explore recipes={recipes} users={users} />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/users/:id"
              element={<UserProfilePage users={users} recipes={recipes} />}
            />
            <Route
              path="/recipe/:id"
              element={<RecipeProfile recipes={recipes} />}
            />
            <Route
              path="/new-recipe"
              element={<NewRecipePage dispatchRecipes={dispatchRecipes} />}
            />
            <Route
              path="/new-user"
              element={<NewUserPage dispatchRecipes={dispatchUsers} />}
            />
          </Routes>
        </>
      </currentLoggedUser.Provider>
    </>
  );
}

export default App;
