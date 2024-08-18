import React from "react";
import "./TranscriptTable.css";

import { IoMdShareAlt } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTranscript } from "../../redux/currentTranscriptSlice";
import { DeleteTranscript, GetTranscript } from "../../calls/transcript";
import { setTranscript } from "../../redux/transcriptSlice";

const TranscriptTable = ({ transcripts }) => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { currentProject } = useSelector((state) => state.currentProject);

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

  const deleteTranscript = async (id) => {
    await DeleteTranscript(id);
    (async function () {
      if (currentProject) {
        const transcripts = await GetTranscript(currentProject._id);
        dispatch(setTranscript(transcripts.message));
      }
    })();
  };

  function dateFormatter(timestamp) {
    const date = new Date(timestamp);
    const options = {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    };
    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
    };

    const formattedDate = date.toLocaleDateString("en-GB", options);
    const formattedTime = date.toLocaleTimeString("en-GB", timeOptions);

    return `${formattedDate} | ${formattedTime}`;
  }

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
                  <div className="td-action">
                    <button
                      className="td-view"
                      onClick={() => toTranscript(transcript)}
                    >
                      View
                    </button>
                    <button
                      className="td-delete"
                      onClick={() => deleteTranscript(transcript._id)}
                    >
                      Delete
                    </button>
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
