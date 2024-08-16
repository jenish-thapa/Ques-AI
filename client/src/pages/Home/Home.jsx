import React, { useState } from "react";
import "./Home.css";

import Podcast from "../../assets/podcast.png";
import { Header } from "../../components/Header";
import { CreateProjectBtn } from "../../components/CreateProjectBtn";
import { ProjectCard } from "../../components/ProjectCard";
import { ProjectDialog } from "../../components/ProjectDialog";
import { useSelector } from "react-redux";

const Home = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const { project } = useSelector((state) => state.project);

  console.log(project);
  

  const handleClick = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <Header />
      {project?.length === 0 ? (
        <main className="create-project">
          <h1>Create a New Project</h1>
          <img src={Podcast} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </p>
          <CreateProjectBtn onClick={() => handleClick()} />
        </main>
      ) : (
        <main className="create-project">
          <div className="create-project-title">
            <h2>Projects</h2>
            <CreateProjectBtn onClick={() => handleClick()} />
          </div>
          <div className="projects">
            {project.map((p, idx) => {
              return (
                <ProjectCard
                  key={idx}
                  name={p.title}
                  numOfEpisodes={p.noOfEpisodes}
                />
              );
            })}
          </div>
        </main>
      )}

      <ProjectDialog open={isDialogOpen} onClose={handleCloseDialog} />
    </div>
  );
};

export default Home;
