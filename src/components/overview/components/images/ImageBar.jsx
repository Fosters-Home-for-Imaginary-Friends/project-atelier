import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";
import Thumbnail from "./Thumbnail.jsx";
import { OverviewContext } from "../../Overview.jsx";

const ImageBar = () => {

  const progressBarRef = useRef(null);

  const { currentStyle, currentPhoto, previousPhoto, loading } = useContext(OverviewContext);

  useLayoutEffect(() => {
    if (progressBarRef.current) {
      let top = -(progressBarRef.current.offsetHeight / currentStyle.photos.length)
      if (currentPhoto > previousPhoto) {
        progressBarRef.current.scrollBy({
          top: top * (currentPhoto - previousPhoto)
        })
      } else {
        progressBarRef.current.scrollBy({
          top: top * (currentPhoto - previousPhoto)
        })
      }
    }
  }, [currentPhoto, loading])

  useEffect(() => {
    if (!loading) {
      progressBarRef.current.scrollBy({
        top: Math.abs((progressBarRef.current.offsetHeight / currentStyle.photos.length) - progressBarRef.current.offsetHeight)
      })
    }
  }, [loading])

  if (loading) {
      return <div className="image-bar loading"></div>
  }

  return (
  <div className="image-bar">
    <ul ref={progressBarRef} className="progress-bar">
      <li className="progress-bar-progress"></li>
      <li className="progress-bar-progress none"></li>
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