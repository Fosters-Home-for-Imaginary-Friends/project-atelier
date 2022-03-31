import React from "react";
import { ImageData } from "./dummyImages.js";

const ImageCarousel = () => {
  return (
    <div className="overview-images">
      <ul className="image-carousel">
        {ImageData.map((image) => {
          return (
            <img src={image.image} key={image} className="image"/>
          )
        })}
      </ul>
    </div>
  )
}

export default ImageCarousel;