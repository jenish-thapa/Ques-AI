import React from "react";
import "./AccountSettings.css";

import { GrHomeRounded } from "react-icons/gr";
import { GoBell } from "react-icons/go";
import { RxExit } from "react-icons/rx";
import { FaArrowLeft } from "react-icons/fa6";

import ProfilePic from "../../assets/profile.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AccountSettings = () => {
  const navigator = useNavigate();
  const { user } = useSelector((state) => state.user);

  const back = () => {
    navigator("/upload");
  };
  return (
    <div className="add-podcast">
      <div className="breadcrumb">
        <div className="path">
          <GrHomeRounded />
          <p>
            Home Page / Sample Project /{" "}
            <span className="purple">Add your podcast</span>
          </p>
        </div>
        <div>
          <GoBell className="bd-icons" />
          <RxExit className="bd-icons orange" />
        </div>
      </div>
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
                type="email"
                id="email"
                value={user.usrname}
                //   onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="acc-form">
              <label>Email</label>
              <input
                type="email"
                id="email"
                value={user.email}
                //   onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* <input type="submit" value="LogIn" className="login-button" /> */}
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
