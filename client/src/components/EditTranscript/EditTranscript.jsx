import React from "react";
import { BreadCrumb } from "../BreadCrumb";
import "./EditTranscript.css";
import { useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const EditTranscript = () => {
  const navigator = useNavigate();
  const { currentTranscript } = useSelector((state) => state.currentTranscript);

  console.log(currentTranscript);

  const back = () => {
    navigator("/upload");
  };

  return (
    <div className="edit-transcript">
      <BreadCrumb normal={"Add your Podcast(s)"} nav={"Edit Transcript"} />
      <div className="trans-cont">
        <div className="trans-utils">
          <h1 className="trans-h1">
            <FaArrowLeft className="back" onClick={back} />
            Edit Transcript
          </h1>
          <div>
            <button className="trans-btn delete">Discard</button>
            <button className="trans-btn">Edit</button>
          </div>
        </div>
        <div className="trans-body">
          <h2>{currentTranscript.name}</h2>
          <pre>{currentTranscript.content}</pre>
        </div>
      </div>
    </div>
  );
};

export default EditTranscript;
