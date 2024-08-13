import React from "react";

import quessAILogo from "../../assets/quessAILogo-purple-withText.png";
import { IoMdSettings } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={quessAILogo} alt="QuessAI Logo" />
      <div className="header-icons">
        <IoMdSettings className="header-icons" />
        <FaRegBell className="header-icons" />
      </div>
    </header>
  );
};

export default Header;
