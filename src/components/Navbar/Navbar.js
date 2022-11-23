import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../utils/database-config";
import "./Navbar.css";

function Navbar() {
  return (
    <ul className="navbar-ul">
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={"/home"}
        >
          home
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
          add new recipe
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={"login"}
        >
          {auth.currentUser?.uid && (
            <span>logged: {auth.currentUser.email}</span>
          )}
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
