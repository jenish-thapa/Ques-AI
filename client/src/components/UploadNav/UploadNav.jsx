import React from "react";
import "./UploadNav.css";

import QuessAILogo from "../../assets/quessAILogo-purple-withText.png";
import profilePic from "../../assets/profile.png"
import { FaPlus } from "react-icons/fa6";
import { GoPencil, GoCopy } from "react-icons/go";
import { TbDiamond } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

const UploadNav = () => {
  return (
    <div className="upload-nav">
      <div className="nav-top">
        <img src={QuessAILogo} alt="QuessAI Logo" />
        <nav className="side-nav">
          <div className="nav-link active">
            <FaPlus /> Add your Podcast(s)
          </div>
          <div className="nav-link">
            <GoPencil /> Create & Repurpose
          </div>
          <div className="nav-link">
            <GoCopy /> Podcast Widget
          </div>
          <div className="nav-link">
            <TbDiamond /> Upgrade
          </div>
        </nav>
      </div>
      <div className="nav-help">
        <div>
          <IoSettingsOutline /> Help
        </div>
      </div>
      <div className="nav-user">
        <img src={profilePic} alt="Profile Pic" />
        <div>
            <h3>Username</h3>
            <p>username@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default UploadNav;
