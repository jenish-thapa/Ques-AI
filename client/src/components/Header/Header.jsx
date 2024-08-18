import React from "react";

import quessAILogo from "../../assets/quessAILogo-purple-withText.png";
import { IoMdSettings } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";

import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigator = useNavigate();

  const toAccount = () => {
    navigator("/account")
  };

  return (
    <header className="header">
      <img src={quessAILogo} alt="QuessAI Logo" />
      <div>
        <IoMdSettings className="header-icons" onClick={toAccount} />
        <FaRegBell className="header-icons" />
      </div>
    </header>
  );
};

export default Header;
