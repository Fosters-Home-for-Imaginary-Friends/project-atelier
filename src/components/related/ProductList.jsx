import React, {useRef} from 'react';

const ProductList = ({cards}) => {
  //points to the carousel-viewport DOM element
  const carouselRef = useRef(null);

  //These functions scroll the content within the carousel-viewport div
  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -240,
      behavior: "smooth"
    });
  }
  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 240,
      behavior: "smooth"
    });
  }

  return (
    <div className="carousel-container"> {/* This holds the carousel viewport and the buttons */}
      <button onClick={scrollLeft} className="arrow">Left</button>
      <div ref={carouselRef} className="carousel-viewport"> {/* The portion of the carousel that is visible to the user */}
        <div className="carousel"> {/* The part that scrolls when you press a button */}
          {cards}
        </div>
      </div>
      <button onClick={scrollRight} className="arrow">Right</button>
    </div>
  );
};

export default ProductList;
