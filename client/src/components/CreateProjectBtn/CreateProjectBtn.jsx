import React from 'react'
import "./CreateProjectBtn.css"
import { FaPlus } from "react-icons/fa6";

const CreateProjectBtn = () => {
  return (
    <button onClick={() => {}} className="create-new-project-btn">
      <FaPlus id="plus" />
      Create New Project
    </button>
  );
}

export default CreateProjectBtn