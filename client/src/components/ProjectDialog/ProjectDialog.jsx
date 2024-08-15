import React from "react";
import "./ProjectDialog.css";

const ProjectDialog = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="project-dialog-overlay">
      <div className="project-dialog">
        <div className="project-diaog-title">
          <h2>Create Project</h2>
        </div>
        <div className="project-diaog-form">
          <label>Enter Project Name:</label>
          <input type="text" placeholder="Type here" required />
          <div className="project-diaog-footer">
            <button className="project-dialog-cancel" onClick={onClose}>
              Cancel
            </button>
            <button className="project-dialog-btn">Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDialog;
