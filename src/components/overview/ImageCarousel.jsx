import React from "react";
import { ImageData } from "./dummyImages.js";
import Image from "./Image.jsx";

const ImageCarousel = () => {
  return (
    <div className="overview-images">
      <ul className="image-carousel">
        {ImageData.map((image) => {
          return (
            <Image key={image} slide={image}/>
          )
        })}
      </ul>
    </div>
  )
}

export default ImageCarousel;