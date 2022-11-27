import React from "react";
import { useNavigate } from "react-router-dom";
import "./snapshot.css";

function Snapshot({ description, navigateTo }) {
  const navigate = useNavigate();
  return (
    <div
      className={
        navigateTo === "explore" ? "snapshot-explore" : "snapshot-login"
      }
    >
      <p>{description}</p>
      <button
        className="red-round-btn"
        onClick={() => {
          navigate(`/${navigateTo}`);
        }}
      >
        {navigateTo === "explore" ? "EXPLORE" : "LOGIN"}
      </button>
    </div>
  );
}

export default Snapshot;
