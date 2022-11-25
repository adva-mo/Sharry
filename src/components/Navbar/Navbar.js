import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../utils/database-config";
import Logout from "../../hooks/Logout";
import "./Navbar.css";

function Navbar() {
  return (
    <ul className="navbar-ul">
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={"/home"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={"/explore"}
        >
          Explore
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={"/new-recipe"}
        >
          Add new recipe
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={auth.currentUser ? `/users/${auth.currentUser.uid}` : "/login"}
        >
          {auth.currentUser ? "Profile" : "Login"}
        </NavLink>
      </li>
      <li>
        {auth.currentUser && (
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to={`/users/${auth.currentUser?.uid}`}
          >
            <img
              className="small-profile-pic"
              src={process.env.PUBLIC_URL + "/profile-pic.png"}
            />
          </NavLink>
        )}
      </li>
      {auth.currentUser && <Logout />}
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={"/explore"}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
