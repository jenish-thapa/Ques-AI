import React, { useState } from "react";
import "./AccountSettings.css";

import { FaArrowLeft } from "react-icons/fa6";

import ProfilePic from "../../assets/profile.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BreadCrumb } from "../BreadCrumb";

const AccountSettings = () => {
  const navigator = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [email, setEmail] = useState(user.email);
  const [usrname, setUsrname] = useState(user.usrname);

  const back = () => {
    navigator("/upload");
  };
  return (
    <div className="add-podcast">
      <BreadCrumb nav={"Account Settings"} />
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
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button className="save-btn save" onClick={() => {}}>Save</button>
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
