import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import currentLoggedUser from "../../context/loggedUserContext";
import "./snapshot.css";

function Snapshot({ description, navigateTo }) {
  const navigate = useNavigate();
  const loggedUserCtx = useContext(currentLoggedUser);
  return (
    <div
      className={
        navigateTo === "explore" ? "snapshot-explore" : "snapshot-login"
      }
    >
      <p style={{ marginBottom: "3rem" }}>{description}</p>
      <button
        className="red-round-btn"
        onClick={() => {
          navigate(`/${navigateTo}`);
        }}
      >
        {navigateTo === "explore"
          ? "EXPLORE"
          : loggedUserCtx?.uid
          ? "Add a new recipe"
          : "LOGIN"}
      </button>
    </div>
  );
}

export default Snapshot;
