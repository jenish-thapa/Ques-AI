import React from "react";
import "./Home.css";

import Podcast from "../../assets/podcast.png";
import { Header } from "../../components/Header";
import { CreateProjectBtn } from "../../components/CreateProjectBtn";

const Home = () => {
  // const projects = [{ name: "Sample Project", episodes: [] }];
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
          <CreateProjectBtn />
        </main>
      ) : (
        <main className="create-project">
          <div className="create-project-title">
            <h2>Projects</h2>
            <CreateProjectBtn />
          </div>
        </main>
      )}
    </div>
  );
};

export default Home;
