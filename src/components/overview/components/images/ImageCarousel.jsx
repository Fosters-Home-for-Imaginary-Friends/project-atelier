import React, { useRef, useContext, useLayoutEffect } from 'react';
import Image from './Image.jsx';
import { OverviewContext } from '../../Overview.jsx';

function ImageCarousel() {
  const imageCarouselRef = useRef(null);

  const {
    currentStyle,
    previousPhoto,
    setPreviousPhoto,
    currentPhoto,
    setCurrentPhoto,
    loading,
  } = useContext(OverviewContext);

  useLayoutEffect(() => {
    if (imageCarouselRef.current) {
      imageCarouselRef.current.scrollBy({
        top: (imageCarouselRef.current.offsetHeight * (currentPhoto - previousPhoto)),
      });
    }
  }, [loading, currentPhoto]);

  if (loading) {
    return <div className="image-carousel loading" />;
  }

  if (!currentStyle.photos[0].url) {
    return <div className="image-carousel no-images">NO IMAGES AVAILABLE</div>;
  }

  const handleUpClick = () => {
    if (currentPhoto > 0) {
      setPreviousPhoto(currentPhoto);
      setCurrentPhoto(currentPhoto - 1);
    }
  };

  const handleDownClick = () => {
    if (currentPhoto < currentStyle.photos.length - 1) {
      setPreviousPhoto(currentPhoto);
      setCurrentPhoto(currentPhoto + 1);
    }
  };

  return (
    <div className="overview-images">
      { currentPhoto === 0
        ? null
        : (
          <button
            className="carousel-button up"
            onClick={handleUpClick}
          />
        )}
      <ul
        id="image-carousel"
        ref={imageCarouselRef}
        className="image-carousel"
      >
        {currentStyle.photos.map((image) => <Image key={image.url} slide={image} />)}
      </ul>
      { currentPhoto === currentStyle.photos.length - 1
        ? null
        : (
          <button
            className="carousel-button down"
            onClick={handleDownClick}
          />
        )}
    </div>
  );
}

export default ImageCarousel;
