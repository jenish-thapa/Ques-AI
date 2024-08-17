import React, { useEffect, useState } from "react";
import "./AddPodcast.css";

import { FaArrowLeft } from "react-icons/fa6";

import RSS from "../../assets/rss.png";
import YT from "../../assets/yt.png";
import UploadIcon from "../../assets/upload.png";
import cloudUpload from "../../assets/cloudUpload.png";

import { UploadType } from "../UploadType";
import { UploadDialog } from "../UploadDialog";
import { useNavigate } from "react-router-dom";
import { TranscriptTable } from "../TranscriptTable";
import { useDispatch, useSelector } from "react-redux";
import { GetTranscript } from "../../calls/transcript";
import { setTranscript } from "../../redux/transcriptSlice";
import { BreadCrumb } from "../BreadCrumb";

const AddPodcast = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const { currentProject } = useSelector((state) => state.currentProject);
  const { transcript } = useSelector((state) => state.transcript);

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [dialogImg, setDialogImg] = useState(null);
  const [dialogTitle, setDialogTitle] = useState(null);

  const loadTranscript = async () => {
    if (currentProject) {
      const transcripts = await GetTranscript(currentProject._id);
      dispatch(setTranscript(transcripts.message));
    }
  };

  useEffect(() => {
    if (currentProject) {
      loadTranscript();
    }
  }, []);

  const handleClick = (dialogImg, dialogTitle) => {
    setDialogImg(dialogImg);
    setDialogTitle(dialogTitle);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const back = () => {
    dispatch(setTranscript(null));
    navigator("/home");
  };

  if (!transcript) return null;

  return (
    <div className="add-podcast">
      <BreadCrumb nav={"Add your Podcast(s)"} />
      <div className="podcast-body">
        <h1 className="acc-h1">
          <FaArrowLeft className="back" onClick={back} />
          Add Podcast
        </h1>
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
        {transcript.length == 0 ? (
          <div className="upload-file">
            <img src={cloudUpload} alt="cloudUpload" />
            <p>
              Select a file or drag and drop here (Podcast Media or
              Transcription Text)
            </p>
            <p className="grey">MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</p>
            <button className="select-btn">Select File</button>
          </div>
        ) : (
          <TranscriptTable transcripts={transcript} />
        )}
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
