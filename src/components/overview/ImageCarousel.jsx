import React, { useState, useRef, useEffect } from "react";
// import { ImageData } from "./dummyImages.js";
import Image from "./Image.jsx";
import {fetchProducts} from "../../helpers.js";


const ImageCarousel = () => {
  const imageCarouselRef = useRef(null);
  const [images, setImages] = useState([]);

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

export default ImageCarousel;