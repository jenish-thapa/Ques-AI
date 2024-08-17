import React, { useEffect, useState } from "react";
import "./UploadDialog.css";
import { useDispatch, useSelector } from "react-redux";
import { AddTranscript, GetTranscript } from "../../calls/transcript";
import { AlertBox } from "../AlertBox";
import { setTranscript } from "../../redux/transcriptSlice";

const UploadDialog = ({ img, title, open, onClose }) => {
  const dispatch = useDispatch();
  const { currentProject } = useSelector((state) => state.currentProject);

  const [alert, setAlert] = useState(null);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(null);
      }, 1300);

      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleUpload = async (event) => {
    event.preventDefault();

    const values = { name, projectId: currentProject._id, content: link };

    try {
      const response = await AddTranscript(values);
      if (response.success) {
        (async function () {
          if (currentProject) {
            const transcripts = await GetTranscript(currentProject._id);
            dispatch(setTranscript(transcripts.message));
          }
        }());
        setAlert({ message: response.message, type: "success" });
      } else {
        setAlert({ message: response.message, type: "error" });
      }
    } catch (error) {
      setAlert({
        message: error.message || "An error occurred",
        type: "error",
      });
    } finally {
      setName("");
      setLink("");
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="upload-dialog-overlay">
      {alert && <AlertBox message={alert.message} type={alert.type} />}
      <div className="upload-dialog">
        <div className="upload-diaog-title">
          <div>
            <img src={img} alt="" />
            <h2>{title}</h2>
          </div>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="upload-diaog-form">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Link</label>
          <textarea
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
          <button onClick={handleUpload} className="upload-dialog-btn">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadDialog;
