import React from "react";
import "./AlertBox.css";

const AlertBox = ({ message, type }) => {
  return (
    <div className="alert">
      <p className={`${type}`}>{message}</p>
    </div>
  );
};

export default AlertBox;
