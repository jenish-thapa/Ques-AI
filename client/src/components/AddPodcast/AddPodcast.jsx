import React, { useState } from "react";
import "./AddPodcast.css";

import { GrHomeRounded } from "react-icons/gr";
import { GoBell } from "react-icons/go";
import { RxExit } from "react-icons/rx";

import RSS from "../../assets/rss.png";
import YT from "../../assets/yt.png";
import UploadIcon from "../../assets/upload.png";
import cloudUpload from "../../assets/cloudUpload.png";

import { UploadType } from "../UploadType";
import { UploadDialog } from "../UploadDialog";

const AddPodcast = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [dialogImg, setDialogImg] = useState(null);
  const [dialogTitle, setDialogTitle] = useState(null);

  const handleClick = (dialogImg, dialogTitle) => {
    setDialogImg(dialogImg);
    setDialogTitle(dialogTitle);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
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
        <h1>Add Podcast</h1>
        <div className="upload-type-cont">
          <UploadType
            title={"RSS Feed"}
            content={"Lorem ipsum dolor sit. Dolor lorem sit."}
            image={RSS}
            onClick={() => handleClick(RSS, "Upload from RSS Feed")}
          />
          <UploadType
            title={"Youtube Video"}
            content={"Lorem ipsum dolor sit. Dolor lorem sit."}
            image={YT}
            onClick={() => handleClick(YT, "Upload from Youtube")}
          />
          <UploadType
            title={"Upload Files"}
            content={"Lorem ipsum dolor sit. Dolor lorem sit."}
            image={UploadIcon}
            onClick={() => handleClick(UploadIcon, "Upload from Files")}
          />
        </div>
        <div className="upload-file">
          <img src={cloudUpload} alt="cloudUpload" />
          <p>
            Select a file or drag and drop here (Podcast Media or Transcription
            Text)
          </p>
          <p className="grey">MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</p>
          <button className="select-btn">Select File</button>
        </div>
      </div>

      <UploadDialog
        img={dialogImg}
        title={dialogTitle}
        open={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </div>
  );
};

export default AddPodcast;
