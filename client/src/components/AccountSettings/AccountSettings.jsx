import React, { useState } from "react";
import "./AccountSettings.css";

import { FaArrowLeft } from "react-icons/fa6";

import ProfilePic from "../../assets/profile.png";
import { useSelector } from "react-redux";
import { BreadCrumb } from "../BreadCrumb";
import { useNavigate } from "react-router-dom";

const AccountSettings = ({ setActiveLink, isPage }) => {
  const navigator = useNavigate();

  const { user } = useSelector((state) => state.user);
  const [usrname, setUsrname] = useState(user.usrname);

  const back = () => {
    if (isPage) navigator("/home");
    else setActiveLink("addPodcast");
  };

  return (
    <div className="add-podcast">
      {!isPage ? <BreadCrumb nav={"Account Settings"} /> : null}
      <div className="podcast-body">
        <h1 className="acc-h1">
          <FaArrowLeft className="back" onClick={back} />
          Account Settings
        </h1>
        <div className="account-cont">
          <div className="user-details">
            <img src={ProfilePic} alt="Profile Pic" />
            <div className="acc-form">
              <label>User Name</label>
              <input
                type="text"
                id="text"
                value={usrname}
                onChange={(e) => setUsrname(e.target.value)}
                required
              />
            </div>
            <div className="acc-form">
              <label>Email</label>
              <input type="email" id="email" value={user.email} readOnly />
            </div>
            {/* <button className="save-btn save" onClick={() => {}}>
              Save
            </button> */}
          </div>
          <h2>Subscriptions</h2>
          <div className="upgrade purple">
            <p>
              Oops! You don’t have any active plans.{" "}
              <span className="bold">Upgrade now!</span>
            </p>
            <input type="submit" value="Upgrade" className="save-btn" />
          </div>
        </div>
      </div>
    </div>
  );
  account - cont;
};

export default AccountSettings;
