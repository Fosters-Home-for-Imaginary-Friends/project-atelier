import React, { useRef, useContext, useState } from "react";
import Image from "./Image.jsx";
import {OverviewContext} from "./Overview.jsx";


const ImageCarousel = () => {

  const imageCarouselRef = useRef(null);

  const { currentStyle, currentPhoto, loading } = useContext(OverviewContext);
  // const [carouselStyle, setCarouselStyle] = useState({});

  if (loading) {
    return <div className="image-carousel loading"></div>;
  }

  if (!currentStyle.photos[0].url) {
    return <div className="image-carousel no-images">NO IMAGES AVAILABLE</div>
  }

  // const changePhoto = () => {
  //   let translate = 30;
  //   setCarouselStyle(`translateY(-${translate}px)`)
  // }

  return (
  <div className="overview-images">
      <ul ref={imageCarouselRef} className="image-carousel">
        {currentStyle.photos.map((image, index) =>
            <Image key={image.url} slide={image}/>
        )}
      </ul>
  </div>
  )
}

export default ImageCarousel;