import React, { useState } from "react";
import { BreadCrumb } from "../BreadCrumb";
import "./EditTranscript.css";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { GetTranscript, PatchTranscript } from "../../calls/transcript";
import { current } from "@reduxjs/toolkit";
import { setTranscript } from "../../redux/transcriptSlice";
import { setCurrentTranscript } from "../../redux/currentTranscriptSlice";

const EditTranscript = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const { currentTranscript } = useSelector((state) => state.currentTranscript);
  const { currentProject } = useSelector((state) => state.currentProject);

  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(currentTranscript.content);

  const back = () => {
    navigator("/upload");
  };

  const handleDiscard = () => {
    setContent(currentTranscript.content);
    setIsEditing(false);
  };

  const handleSave = async () => {
    await PatchTranscript(currentTranscript._id, content);
    dispatch(setCurrentTranscript({ ...currentTranscript, content: content }));

    (async function () {
      if (currentProject) {
        const transcripts = await GetTranscript(currentProject._id);
        dispatch(setTranscript(transcripts.message));
      }
    })();
    setIsEditing(!isEditing);
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
            {isEditing ? (
              <>
                <button className="trans-btn delete" onClick={handleDiscard}>
                  Discard
                </button>
                <button className="trans-btn" onClick={handleSave}>
                  Save
                </button>
              </>
            ) : (
              <button
                className="trans-btn"
                onClick={() => setIsEditing(!isEditing)}
              >
                Edit
              </button>
            )}
          </div>
        </div>
        <div className="trans-body">
          <h2>{currentTranscript.name}</h2>
          {isEditing ? (
            <textarea
              className="trans-edit"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          ) : (
            <pre className="trans-edit">{content}</pre>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditTranscript;
