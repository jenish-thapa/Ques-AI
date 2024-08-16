import React, { useEffect } from "react";
import "./Upload.css";
import { UploadNav } from "../../components/UploadNav";
import { AddPodcast } from "../../components/AddPodcast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Upload = () => {
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
    <div className="upload">
      <UploadNav />
      <AddPodcast />
    </div>
  );
};

export default Upload;
