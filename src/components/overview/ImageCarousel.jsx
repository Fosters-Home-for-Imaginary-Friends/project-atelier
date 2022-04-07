import React, { useRef, useContext, useState, useLayoutEffect } from "react";
import Image from "./Image.jsx";
import {OverviewContext} from "./Overview.jsx";


const ImageCarousel = () => {

  const imageCarouselRef = useRef(null);

  const { currentStyle, previousPhoto, currentPhoto, loading } = useContext(OverviewContext);
  const [dimensions, setDimensions] = useState({width: 0, height: 0});

  useLayoutEffect(() => {
    if (imageCarouselRef.current && dimensions) {
      setDimensions({
        width: imageCarouselRef.current.offsetWidth,
        height: imageCarouselRef.current.offsetHeight
      })
      if (currentPhoto > previousPhoto) {
        imageCarouselRef.current.scrollBy({
          top: (dimensions.height * (currentPhoto - previousPhoto))
        })
      } else {
        imageCarouselRef.current.scrollBy({
          top: (dimensions.height * (currentPhoto - previousPhoto))
        })
      }
    }
  }, [loading, currentPhoto]);

  if (loading) {
    return <div className="image-carousel loading"></div>;
  }

  if (!currentStyle.photos[0].url) {
    return <div className="image-carousel no-images">NO IMAGES AVAILABLE</div>
  }

  // const handleScroll = () => {
  //   if (!hasScrolled) {
  //     if (imageCarouselRef.current.scrollTop > (dimensions.height * (currentPhoto - previousPhoto))) {
  //       setCurrentPhoto(currentPhoto + 1)
  //       setHasScrolled(true);
  //     } else {
  //       setCurrentPhoto(currentPhoto - 1)
  //       setHasScrolled(true);
  //     }
  //   }
  // }

  return (
  <div className="overview-images">
      <ul ref={imageCarouselRef} className="image-carousel">
        {currentStyle.photos.map((image) =>
            <Image key={image.url} slide={image}/>
        )}
      </ul>
  </div>
  )
}

export default ImageCarousel;