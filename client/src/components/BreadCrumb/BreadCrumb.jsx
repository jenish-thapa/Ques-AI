import React from "react";
import "./BreadCrumb.css";

import { GrHomeRounded } from "react-icons/gr";
import { GoBell } from "react-icons/go";
import { RxExit } from "react-icons/rx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BreadCrumb = ({ normal, nav }) => {
  const navigator = useNavigate();
  const { currentProject } = useSelector((state) => state.currentProject);

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    navigator("/login");
  };

  return (
    <div className="breadcrumb">
      <div className="path">
        <GrHomeRounded />
        <p>
          Home Page / {currentProject.name} /{" "}
          {normal ? `${normal} / ` : ""}
          <span className="purple">{nav}</span>
        </p>
      </div>
      <div>
        <GoBell className="bd-icons" />
        <RxExit className="bd-icons orange" onClick={handleLogout} />
      </div>
    </div>
  );
};

export default BreadCrumb;
