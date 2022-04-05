import React, { useRef, useContext } from "react";
import Image from "./Image.jsx";
import {OverviewContext} from "./Overview.jsx";


const ImageCarousel = () => {

  const imageCarouselRef = useRef(null);

  const { currentStyle, loading } = useContext(OverviewContext);

  if (loading) {
    return <div className="image-carousel loading"></div>;
  }

  return (
  <div className="overview-images">
      <ul ref={imageCarouselRef} className="image-carousel">
        {currentStyle.photos.map((image, index) =>
            <Image key={index} slide={image}/>
        )}
      </ul>
  </div>
  )
}

export default ImageCarousel;