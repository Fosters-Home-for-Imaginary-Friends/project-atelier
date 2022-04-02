import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Image from "./Image.jsx";
import {fetchProducts} from "../../helpers.js";


const ImageCarousel = ({ currentStyles }) => {
  const imageCarouselRef = useRef(null);
  const [images, setImages] = useState([]);
  // const currentStyle = currentStyles[0];
  // console.log(currentStyles);
  // const currentImages = currentStyle.photos;
  // console.log(currentImages);

  useEffect(() => {
    fetchProducts()
      .then((response) => {
        setImages(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className="overview-images">
      <ul ref={imageCarouselRef} className="image-carousel">
        {images.map(image =>
          <Image key={image.id} slide={image}/>
        )}
      </ul>
    </div>
  )
}

ImageCarousel.propTypes = {
  currentStyles: PropTypes.array.isRequired
}

export default ImageCarousel;