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
        src="https://firebasestorage.googleapis.com/v0/b/sharry-1319e.appspot.com/o/assets%2Flogo.png?alt=media&token=026310f7-4bdc-4b4b-ba0a-52f0696d5988"
        alt=""
      />
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={"/home"}
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
              src="https://firebasestorage.googleapis.com/v0/b/sharry-1319e.appspot.com/o/assets%2Fuser-avatar.png?alt=media&token=7e45390b-7805-4d0b-a31b-508583923459"
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
