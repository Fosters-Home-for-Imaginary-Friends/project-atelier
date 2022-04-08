import React, { useContext, useEffect } from "react";
import Thumbnail from "./Thumbnail.jsx";
import { OverviewContext } from "./Overview.jsx";

const ImageBar = () => {

  const { currentStyle, currentPhoto, progress, setProgress, loading } = useContext(OverviewContext);

  useEffect(() => {
    if (!loading) {
      setProgress(((currentPhoto + 1) / currentStyle.photos.length) * 100)
    }
  }, [currentPhoto, loading])

  if (loading) {
      return <div className="image-bar loading"></div>
  }

  var style = {
    height: `${progress}%`,
    behavior: 'smooth'
  }

  return (
  <div className="image-bar">
    <div className="progress-bar">
      <div className="progress-bar-progress" style={style}></div>
    </div>
    <ul className="thumbnails">
      {currentStyle.photos.map((thumbnail, index) =>
        <Thumbnail key={thumbnail.thumbnail_url} thumbnail={thumbnail} index={index}/>
      )}
    </ul>
  </div>
  )
}

export default ImageBar;