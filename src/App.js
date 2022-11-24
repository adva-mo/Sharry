import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/ExplorePage";
import LoginPage from "./pages/LoginPage";
import UserProfile from "./pages/UserProfile";
import RecipeProfile from "./pages/RecipeProfile";
import NewRecipe from "./pages/NewRecipePage";
import { recipesReducers } from "./reducers/recipesReducers.js";
import { useReducer } from "react";
// import { usersReducers } from "./reducers/usersReducers.js";

import "./App.css";
import "./utils/utils.css";

function App() {
  const [recipes, setRecipes] = useReducer(recipesReducers, null);
  // const [users, setUsers] = useReducer(usersReducers, null);
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="*" element={<Navigate replace to="/home" />} />
          <Route
            path="/home"
            element={<Home />}
            recipes={recipes}
            setRecipes={setRecipes}
          />
          <Route
            path="/explore"
            element={<Explore recipes={recipes} setRecipes={setRecipes} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/recipe/:id" element={<RecipeProfile />} />
          <Route path="/new-recipe" element={<NewRecipe />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
