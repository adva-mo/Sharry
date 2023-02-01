import { lazy, Suspense, useReducer, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/homePage/Home";
import { recipesReducers } from "./reducers/recipesReducers.js";
import { usersReducers } from "./reducers/usersReducers";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/database-config";
import currentLoggedUser from "./context/loggedUserContext";
import "./App.css";
import "./utils/utils.css";
import Spinner from "./components/Spinner/Spinner";

const LazyExplore = lazy(() => import("./pages/ExplorePage/ExplorePage"));
const LazyLoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const LazyUserProfilePage = lazy(() => import("./pages/UserProfilePage"));
const LazyNewUserPage = lazy(() => import("./pages/newUserPage/NewUserPage"));
const LazyRecipeProfile = lazy(() =>
  import("./pages/recipeProfilePage/RecipeProfile")
);
const LazyNewRecipePage = lazy(() =>
  import("./pages/newRecipePage/NewRecipePage")
);

function App() {
  const [recipes, dispatchRecipes] = useReducer(recipesReducers, null);
  const [users, dispatchUsers] = useReducer(usersReducers, null);
  const [loggedUser, setLoggedUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setLoggedUser(currentUser);
  });

  return (
    <>
      <currentLoggedUser.Provider value={{ ...loggedUser }}>
        <Navbar />
        <>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="*" element={<Navigate replace to="/" />} />
              <Route
                path="/"
                element={
                  <Home
                    recipes={recipes}
                    dispatchRecipes={dispatchRecipes}
                    users={users}
                    dispatchUsers={dispatchUsers}
                    loggedUser={loggedUser}
                  />
                }
              />
              <Route
                path="/explore"
                element={<LazyExplore recipes={recipes} users={users} />}
              />
              <Route path="/login" element={<LazyLoginPage />} />
              <Route
                path="/users/:id"
                element={
                  <LazyUserProfilePage
                    users={users}
                    recipes={recipes}
                    dispatchUsers={dispatchUsers}
                  />
                }
              />
              <Route
                path="/recipe/:id"
                element={
                  <LazyRecipeProfile
                    recipes={recipes}
                    dispatchRecipes={dispatchRecipes}
                    dispatchUsers={dispatchUsers}
                  />
                }
              />
              <Route
                path="/new-recipe"
                element={
                  <LazyNewRecipePage dispatchRecipes={dispatchRecipes} />
                }
              />
              <Route
                path="/new-user"
                element={<LazyNewUserPage dispatchUsers={dispatchUsers} />}
              />
            </Routes>
          </Suspense>
        </>
      </currentLoggedUser.Provider>
    </>
  );
}

export default App;
