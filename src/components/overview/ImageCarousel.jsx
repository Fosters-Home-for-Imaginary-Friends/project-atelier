import React, { useRef } from "react";
import { ImageData } from "./dummyImages.js";
import Image from "./Image.jsx";

const ImageCarousel = () => {

  const imageCarouselRef = useRef(null);

  return (
    <div className="overview-images">
      <ul ref={imageCarouselRef} className="image-carousel">
        {ImageData.map(image =>
          <Image key={image} slide={image}/>
        )}
      </ul>
    </div>
  )
}

export default ImageCarousel;