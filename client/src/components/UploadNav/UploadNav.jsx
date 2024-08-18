import React, { useState } from "react";
import "./UploadNav.css";

import QuessAILogo from "../../assets/quessAILogo-purple-withText.png";
import profilePic from "../../assets/profile.png";
import CollapseLeft from "../../assets/collapse-l.png";

import { FaPlus } from "react-icons/fa6";
import { GoPencil, GoCopy } from "react-icons/go";
import { TbDiamond } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UploadNav = ({ activeLink, setActiveLink }) => {
  const navigator = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleNavClick = (link) => {
    setActiveLink(link);
    console.log(activeLink);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className="upload-nav"
      style={{
        width: isCollapsed ? "3rem" : "25rem",
        padding: isCollapsed ? "0" : "4rem 3rem",
      }}
    >
      <div
        className="nav-top"
        style={{
          opacity: isCollapsed ? "0" : "1",
          transform: isCollapsed ? "translateX(-25rem)" : "",
        }}
      >
        <img
          src={QuessAILogo}
          alt="QuessAI Logo"
          onClick={() => navigator("/home")}
          className="nav-logo"
        />
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
      <div
        className="nav-help"
        style={{
          opacity: isCollapsed ? "0" : "1",
          transform: isCollapsed ? "translateX(-25rem)" : "",
        }}
      >
        <div>
          <IoSettingsOutline /> Help
        </div>
      </div>
      <div
        className="nav-user"
        onClick={() => handleNavClick("settings")}
        style={{
          opacity: isCollapsed ? "0" : "1",
          transform: isCollapsed ? "translateX(-25rem)" : "",
        }}
      >
        <img src={profilePic} alt="Profile Pic" />
        <div>
          <h3>{user.usrname}</h3>
          <p>{user.email}</p>
        </div>
      </div>
      <button
        className="collapse-btn"
        onClick={toggleCollapse}
        style={{
          transform: isCollapsed
            ? "rotate(180deg) translateY(-50%) translateX(-150%)"
            : "translateY(-50%) translateX(50%)",
        }}
      >
        <img src={CollapseLeft} />
      </button>
    </div>
  );
};

export default UploadNav;
