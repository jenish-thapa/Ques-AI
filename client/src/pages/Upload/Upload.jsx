import React, { useEffect, useState } from "react";
import "./Upload.css";
import { UploadNav } from "../../components/UploadNav";
import { AddPodcast } from "../../components/AddPodcast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreateRepurpose } from "../../components/CreateRepurpose";
import { PodcastWidget } from "../../components/PodcastWidget";
import { Upgrade } from "../../components/Upgrade";
import { AccountSettings } from "../../components/AccountSettings";

const Upload = () => {
  const navigator = useNavigate();
  const { currentProject } = useSelector((state) => state.currentProject);
  const [activeLink, setActiveLink] = useState("addPodcast");

  useEffect(() => {
    if (!currentProject) {
      navigator("/home");
    }
  }, [currentProject, navigator]);

  if (!currentProject) {
    return null;
  }

  const renderComponent = () => {
    switch (activeLink) {
      case "addPodcast":
        return <AddPodcast />;
      case "createRepurpose":
        return <CreateRepurpose />;
      case "podcastWidget":
        return <PodcastWidget />;
      case "upgrade":
        return <Upgrade />;
      case "settings":
        return <AccountSettings setActiveLink={setActiveLink} isPage={false} />;
      default:
        return null;
    }
  };

  return (
    <div className="upload">
      <UploadNav activeLink={activeLink} setActiveLink={setActiveLink} />
      {renderComponent()}
    </div>
  );
};

export default Upload;
