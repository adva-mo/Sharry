import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/ExplorePage";
import LoginPage from "./pages/LoginPage";
import UserProfile from "./pages/UserProfile";
import RecipeProfile from "./pages/RecipeProfile";
import NewRecipe from "./pages/NewRecipePage";

import "./App.css";
import "./utils/utils.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="*" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
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
