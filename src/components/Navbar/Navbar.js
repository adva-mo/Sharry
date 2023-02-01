import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../utils/database-config";
import Logout from "../Logout/Logout";
import "./Navbar.css";

function Navbar() {
  return (
    <ul className="navbar-ul">
      <img
        className="logo-img"
        src={process.env.PUBLIC_URL + "/assets/logo.png"}
        // src="https://firebasestorage.googleapis.com/v0/b/sharry-1319e.appspot.com/o/assets%2Flogo.png?alt=media&token=026310f7-4bdc-4b4b-ba0a-52f0696d5988"
        alt=""
      />
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li className="media-450">
        <NavLink
          className={(navData) => (navData.is ? "active" : "")}
          to={"/explore"}
        >
          Explore
        </NavLink>
      </li>
      <li className="media-450">
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
      {auth.currentUser && (
        <li className="media-450">
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to={`/users/${auth.currentUser?.uid}`}
          >
            <img
              className="small-profile-pic"
              src={process.env.PUBLIC_URL + "/assets/user-avatar.png"}
              alt=""
            />
          </NavLink>
        </li>
      )}
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
