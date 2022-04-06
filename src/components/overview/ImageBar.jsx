import React, { useContext } from "react";
import Thumbnail from "./Thumbnail.jsx";
import { OverviewContext } from "./Overview.jsx";

const ImageBar = () => {

  const { currentStyle, loading } = useContext(OverviewContext);

  if (loading) {
      return <div className="image-bar loading"></div>
  }

  return (
  <div className="image-bar">
    <div className="progress-bar">
      <div className="progress-bar-progress"></div>
    </div>
    <ul className="thumbnails">
      {currentStyle.photos.map((thumbnail, index) =>
        <Thumbnail key={index} thumbnail={thumbnail} index={index}/>
      )}
    </ul>
  </div>
  )
}

export default ImageBar;