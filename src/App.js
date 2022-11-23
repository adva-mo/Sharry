import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import LoginPage from "./pages/LoginPage";
import UserProfile from "./pages/UserProfile";
import RecipeProfile from "./pages/RecipeProfile";

import "./App.css";

function App() {
  return (
    <div>
      sharry
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
        </Routes>
      </main>
    </div>
  );
}

export default App;
