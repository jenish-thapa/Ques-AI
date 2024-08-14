import React from "react";
import "./UploadDialog.css";

const UploadDialog = ({ img, title, open, onClose }) => {
  if (!open) return null;

  return (
    <div className="upload-dialog-overlay">
      <div className="upload-dialog">
        <div className="upload-diaog-title">
          <div>
            <img src={img} alt="" />
            <h2>{title}</h2>
          </div>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="upload-diaog-form">
          <label>Name</label>
          <input type="text" required />
          <label>Link</label>
          <input type="text" required />
          <button className="upload-dialog-btn">Upload</button>
        </div>
      </div>
    </div>
  );
};

export default UploadDialog;
