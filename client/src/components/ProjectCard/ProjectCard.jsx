import React from "react";
import "./ProjectCard.css"

const ProjectCard = ({ name, numOfEpisodes }) => {
  return (
    <div className="project-card">
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
