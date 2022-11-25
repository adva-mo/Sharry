import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/ExplorePage/ExplorePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NewRecipePage from "./pages/NewRecipePage";
import RecipeProfile from "./pages/recipeProfilePage/RecipeProfile";
import { recipesReducers } from "./reducers/recipesReducers.js";
import { useReducer } from "react";
import { usersReducers } from "./reducers/usersReducers";
import "./App.css";
import "./utils/utils.css";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  const [recipes, dispatchRecipes] = useReducer(recipesReducers, null);
  const [users, dispatchUsers] = useReducer(usersReducers, null);

  return (
    <>
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
          <Route path="/users/:id" element={<UserProfilePage />} />
          <Route path="/recipe/:id" element={<RecipeProfile />} />
          <Route
            path="/new-recipe"
            element={<NewRecipePage dispatchRecipes={dispatchRecipes} />}
          />
        </Routes>
      </>
    </>
  );
}

export default App;
