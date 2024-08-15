import React, { useState } from "react";
import "./Home.css";

import Podcast from "../../assets/podcast.png";
import { Header } from "../../components/Header";
import { CreateProjectBtn } from "../../components/CreateProjectBtn";
import { ProjectCard } from "../../components/ProjectCard";
import { ProjectDialog } from "../../components/ProjectDialog";

const Home = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleClick = () => {
    console.log("clicked");
    
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  // const projects = [
  //   { name: "Sample Project", episodes: [{}, {}, {}, {}] },
  //   { name: "SST Project", episodes: [{}, {}, {}] },
  //   { name: "MERN Stack Project", episodes: [{}, {}, {}, {}, {}] },
  //   { name: "MERN Stack Project", episodes: [{}, {}, {}, {}, {}] },
  //   { name: "MERN Stack Project", episodes: [{}, {}, {}, {}, {}] },
  // ];
  const projects = [];
  return (
    <div>
      <Header />
      {projects.length === 0 ? (
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
            {projects.map((project, idx) => {
              return (
                <ProjectCard
                  key={idx}
                  name={project.name}
                  numOfEpisodes={project.episodes.length}
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
