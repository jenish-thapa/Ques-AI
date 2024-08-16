import React from "react";
import "./ProjectCard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentProject } from "../../redux/currentProjectSlice";

const ProjectCard = ({ _id, name, numOfEpisodes }) => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const toUpload = () => {
    dispatch(setCurrentProject({ _id: _id, name: name }));
    navigator("/upload");
  };
  return (
    <div className="project-card" onClick={toUpload}>
      <div className="pc-left">SP</div>
      <div className="pc-right">
        <div className="pc-title">
          <h3>{name}</h3>
          <p>{numOfEpisodes} Episodes</p>
        </div>
        <div className="pc-footer">Last edited a week ago</div>
      </div>
    </div>
  );
};

export default ProjectCard;
