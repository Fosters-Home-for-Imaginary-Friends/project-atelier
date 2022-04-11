import React, { useRef, useContext, useState, useLayoutEffect } from "react";
import Image from "./Image.jsx";
import { OverviewContext } from "./Overview.jsx";


const ImageCarousel = () => {

  const imageCarouselRef = useRef(null);

  const { currentStyle, previousPhoto, currentPhoto, setCurrentPhoto, setPreviousPhoto, loading } = useContext(OverviewContext);
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

  // var currentTop = 0;

  // const changeImage = () => {
  //   console.log(imageCarouselRef.current.scrollTop)
  //   if (imageCarouselRef.current.scrollTop > currentTop) {
  //     setCurrentPhoto(currentPhoto + 1)
  //   } else {
  //     console.log('Moving up!')
  //   }
  // }

  // const changeImageThrottled = useMemo(() => _.throttle(changeImage, 2000), []);

  // const onWheel = (event) => {
  //   console.log(event.deltaY)
  //   changeImage(event.deltaY)
  // }

  // const onWheelThrottled = useMemo(() => _.throttle(onWheel, 2000), []);

  if (loading) {
    return <div className="image-carousel loading"></div>;
  }

  if (!currentStyle.photos[0].url) {
    return <div className="image-carousel no-images">NO IMAGES AVAILABLE</div>
  }

  // if (imageCarouselRef.current) {
  //   imageCarouselRef.current.addEventListener('wheel', changeImageThrottled);
  // }

  const handleUpClick = () => {
    if (currentPhoto > 0) {
      setPreviousPhoto(currentPhoto)
      setCurrentPhoto(currentPhoto - 1)
    }
  }

  const handleDownClick = () => {
    if (currentPhoto < currentStyle.photos.length - 1) {
      setPreviousPhoto(currentPhoto)
      setCurrentPhoto(currentPhoto + 1)
    }
  }

  return (
  <div className="overview-images">
    {currentPhoto === 0 ? null :
      <button className="carousel-button up" onClick={handleUpClick}></button>
    }
      <ul id="image-carousel" ref={imageCarouselRef} className="image-carousel">
        {currentStyle.photos.map((image) =>
            <Image key={image.url} slide={image}/>
        )}
      </ul>
    {currentPhoto === currentStyle.photos.length - 1 ? null :
      <button className="carousel-button down" onClick={handleDownClick}></button>
    }
  </div>
  )
}

export default ImageCarousel;