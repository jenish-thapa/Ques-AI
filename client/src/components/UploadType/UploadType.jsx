import React from "react";
import "./UploadType.css";

const UploadType = ({title, content, image}) => {
  return (
    <div className="upload-type">
      <div className="ut-l">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <img src={image} className="ut-icons" />
    </div>
  );
};

export default UploadType;
