import React, { useState } from "react";
import "./UploadNav.css";

import QuessAILogo from "../../assets/quessAILogo-purple-withText.png";
import profilePic from "../../assets/profile.png";
import { FaPlus } from "react-icons/fa6";
import { GoPencil, GoCopy } from "react-icons/go";
import { TbDiamond } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UploadNav = ({ activeLink, setActiveLink }) => {
  const navigator = useNavigate();
  const { user } = useSelector((state) => state.user);

  const toSettings = () => {
    navigator("/account");
  };

  const handleNavClick = (link) => {
    setActiveLink(link);
    console.log(activeLink)
  };

  return (
    <div className="upload-nav">
      <div className="nav-top">
        <img src={QuessAILogo} alt="QuessAI Logo" />
        <nav className="side-nav">
          <div
            className={`nav-link ${
              activeLink === "addPodcast" ? "active" : ""
            }`}
            onClick={() => handleNavClick("addPodcast")}
          >
            <FaPlus /> Add your Podcast(s)
          </div>
          <div
            className={`nav-link ${
              activeLink === "createRepurpose" ? "active" : ""
            }`}
            onClick={() => handleNavClick("createRepurpose")}
          >
            <GoPencil /> Create & Repurpose
          </div>
          <div
            className={`nav-link ${
              activeLink === "podcastWidget" ? "active" : ""
            }`}
            onClick={() => handleNavClick("podcastWidget")}
          >
            <GoCopy /> Podcast Widget
          </div>
          <div
            className={`nav-link ${activeLink === "upgrade" ? "active" : ""}`}
            onClick={() => handleNavClick("upgrade")}
          >
            <TbDiamond /> Upgrade
          </div>
        </nav>
      </div>
      <div className="nav-help">
        <div>
          <IoSettingsOutline /> Help
        </div>
      </div>
      <div className="nav-user" onClick={toSettings}>
        <img src={profilePic} alt="Profile Pic" />
        <div>
          <h3>{user.usrname}</h3>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UploadNav;
