import React, { useRef, useContext, useState } from "react";
import Image from "./Image.jsx";
import { OverviewContext } from "./Overview.jsx";


const ImageCarousel = () => {

  const imageCarouselRef = useRef(null);

  const { currentStyle, currentPhoto, loading } = useContext(OverviewContext);
  const [carouselTop, setCarouselTop] = useState(0);
  const [style, setStyle] = useState({
    "pointerEvents": "auto",
    "width": "50vh",
    "transform": "translateY(0px)"
  });

  if (loading) {
    return <div className="image-carousel loading"></div>;
  }

  if (!currentStyle.photos[0].url) {
    return <div className="image-carousel no-images">NO IMAGES AVAILABLE</div>
  }

  // var style = {
  //   "pointerEvents": "auto",
  //   "width": "50vh",
  //   "transform": "translateY(0px)"
  // }

  const scrollDown = () => {
    // console.log(imageCarouselRef.current.offsetTop);
    // console.log(imageCarouselRef)
    // imageCarouselRef.current.scrollBy({
    //   top: (imageCarouselRef.current.scrollHeight / currentStyle.photos.length),
    //   behavior: 'smooth'
    // })
    if (carouselTop <= (imageCarouselRef.current.scrollHeight - imageCarouselRef.current.clientHeight)) {
      setCarouselTop(carouselTop + imageCarouselRef.current.clientHeight);
      setStyle({
        "pointerEvents": "auto",
        "width": "50vh",
        "transform": `translateY(-${carouselTop}px)`,
        "transition": "transform 500ms ease-out 25ms"
      })
    }
  }

  return (
  <div className="overview-images">
      <button onClick={scrollDown}>Scroll Up</button>
      <button onClick={scrollDown}>Scroll Down</button>
      <ul ref={imageCarouselRef} className="image-carousel" style={style}>
        {currentStyle.photos.map((image) =>
            <Image key={image.url} slide={image}/>
        )}
      </ul>
  </div>
  )
}

export default ImageCarousel;