import React, { useEffect, useState } from "react";
import "./ProjectDialog.css";
import { AddProject, GetProject } from "../../calls/project";
import { useDispatch, useSelector } from "react-redux";
import { setProject } from "../../redux/projectSlice";
import { hideLoading, showLoading } from "../../redux/loaderSlice";

const ProjectDialog = ({ open, onClose }) => {
  const [title, setTitle] = useState("");
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const addProjects = async () => {
    dispatch(showLoading());

    if (user && user._id) {
      const projects = await GetProject(user._id);
      dispatch(setProject(projects.message));
    }

    setTimeout(() => {
      dispatch(hideLoading());
    }, 200);
  };

  useEffect(() => {
    if (user) {
      console.log("mounting");

      addProjects();
    }
  }, []);

  const onSubmit = async () => {
    const values = { title, createdBy: user._id };
    try {
      const response = await AddProject(values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    addProjects();

    setTitle("");
    onClose();
  };

  if (!open) return null;
  return (
    <div className="project-dialog-overlay">
      <div className="project-dialog">
        <div className="project-diaog-title">
          <h2>Create Project</h2>
        </div>
        <div className="project-diaog-form">
          <label>Enter Project Name:</label>
          <input
            type="text"
            placeholder="Type here"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="project-diaog-footer">
            <button className="project-dialog-cancel" onClick={onClose}>
              Cancel
            </button>
            <button onClick={onSubmit} className="project-dialog-btn">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDialog;
