import React, { useContext, useLayoutEffect, useState } from "react";
import Thumbnail from "./Thumbnail.jsx";
import { OverviewContext } from '../../context/OverviewContext.jsx';

const ImageBar = () => {

  const {
    currentStyle,
    currentPhoto,
    loading
  } = useContext(OverviewContext);

  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    if (!loading) {
      let top = (((1) / currentStyle.photos.length) * 100)
      setProgress((top * (currentPhoto + 1)));
    }
  }, [currentPhoto, loading])

  if (loading) {
      return <div className="image-bar loading"></div>
  }

  var style = {
    height: `${progress}%`,
    transition: 'height 0.2s ease-in 0.2s'
  }

  return (
  <div className="image-bar">
    <ul className="progress-bar">
      <li className="progress-bar-progress" style={style}></li>
    </ul>
    <ul className="thumbnails">
      {currentStyle.photos.map((thumbnail, index) =>
        <Thumbnail key={thumbnail.thumbnail_url} thumbnail={thumbnail} index={index}/>
      )}
    </ul>
  </div>
  )
}

export default ImageBar;