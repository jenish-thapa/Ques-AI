import React from "react";
import "./TranscriptTable.css";

const TranscriptTable = () => {
  return (
    <div className="transcript-table-cont">
      <h3>Your Files</h3>
      <table className="transcript-table">
        <tr>
          <th className="head-l">No.</th>
          <th>Name</th>
          <th>Upload Date & Time</th>
          <th>Status</th>
          <th className="head-r">Action</th>
        </tr>
        <tr className="transcript-table-row">
          <td>1</td>
          <td>THE SIDEPOD S2 EPISODE 15</td>
          <td>25 Oct 23 | 09:04</td>
          <td>
            <button className="td-done">Done</button>
          </td>
          <td>
            <button className="td-view">View</button>
            <button className="td-view">Delete</button>
          </td>
        </tr>
        <tr className="transcript-table-row">
          <td>2</td>
          <td>THE SIDEPOD S2 EPISODE 17</td>
          <td>27 Oct 23 | 11:08</td>
          <td>
            <button className="td-done">Done</button>
          </td>
          <td>
            <button className="td-view">View</button>
            <button className="td-view">Delete</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TranscriptTable;
