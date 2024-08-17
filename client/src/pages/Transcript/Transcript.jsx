import React, { useEffect } from "react";
import "./Transcript.css";
import { UploadNav } from "../../components/UploadNav";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { EditTranscript } from "../../components/EditTranscript";

const Transcript = () => {
  const navigator = useNavigate();
  const { currentProject } = useSelector((state) => state.currentProject);

  useEffect(() => {
    if (!currentProject) {
      navigator("/home");
    }
  }, [currentProject, navigator]);

  if (!currentProject) {
    return null;
  }

  return (
    <div className="transcript">
      <UploadNav />
      <EditTranscript />
    </div>
  );
};

export default Transcript;
