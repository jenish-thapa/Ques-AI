import React from "react";
import "./TranscriptTable.css";

import { IoMdShareAlt } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentTranscript } from "../../redux/currentTranscriptSlice";

const TranscriptTable = ({ transcripts }) => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const toTranscript = (t) => {
    const value = {
      _id: t._id,
      name: t.name,
      projectId: t.projectId,
      content: t.content,
    };
    dispatch(setCurrentTranscript(value));
    navigator("/transcript");
  };

  const dateFormatter = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      day: "2-digit",
      month: "short",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    return (
      date.toLocaleDateString("en-GB", options).replace(/,/, "") +
      " | " +
      date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
    );
  };

  return (
    <div className="transcript-table-cont">
      <h3>Your Files</h3>
      <table className="transcript-table">
        <thead>
          <tr>
            <th className="head-l">No.</th>
            <th>Name</th>
            <th>Upload Date & Time</th>
            <th>Status</th>
            <th className="head-r">Action</th>
          </tr>
        </thead>
        <tbody className="t-body">
          {transcripts.map((transcript, idx) => {
            return (
              <tr className="transcript-table-row" key={idx}>
                <td>{idx + 1}</td>
                <td>{transcript.name}</td>
                <td>{dateFormatter(transcript.createdAt)}</td>
                <td>
                  <button className="td-done">Done</button>
                </td>
                <td>
                  <div>
                    <button
                      className="td-view"
                      onClick={() => toTranscript(transcript)}
                    >
                      View
                    </button>
                    <button className="td-delete">Delete</button>
                    <IoMdShareAlt className="share-icon" />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TranscriptTable;
