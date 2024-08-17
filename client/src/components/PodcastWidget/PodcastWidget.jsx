import React from "react";
import { BreadCrumb } from "../BreadCrumb";
import "./PodcastWidget.css";

const PodcastWidget = () => {
  return (
    <div className="podcast-widget">
      <BreadCrumb nav={"Podcast Widget"} />
    </div>
  );
};

export default PodcastWidget;
