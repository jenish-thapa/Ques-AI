import React from "react";
import "./ProjectCard.css";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ name, numOfEpisodes }) => {
  const navigator = useNavigate();
  const toUpload = () => {
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
