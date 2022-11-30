import React from "react";
import "./error.css";

function Error({ msg }) {
  return <div className="error-modal">{msg}</div>;
}

export default Error;
