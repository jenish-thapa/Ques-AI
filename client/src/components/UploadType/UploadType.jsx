import React from "react";
import "./UploadType.css";

const UploadType = ({title, content, image, onClick}) => {
  return (
    <div className="upload-type" onClick={onClick}>
      <div className="ut-l">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <img src={image} className="ut-icons" />
    </div>
  );
};

export default UploadType;
