import React, {useRef} from 'react';
import ProductCard from './ProductCard.jsx';

const RelatedProducts = () => {
  //points to the carousel-viewport DOM element
  const carouselRef = useRef(null);

  //These functions scroll the content within the carousel-viewport div
  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -160,
      behavior: "smooth"
    });
  }
  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 160,
      behavior: "smooth"
    });
  }
  return (
    <div className="related-products">
      <span>Related Products</span>
      <div className="carousel-container"> {/* This holds the carousel viewport and the buttons */}
        <button onClick={scrollLeft} className="arrow">Left</button>
        <div ref={carouselRef} className="carousel-viewport"> {/* The portion of the carousel that is visible to the user */}
          <div className="carousel"> {/* The part that scrolls when you press a button */}
            {[1,2,3,4,5,6,7,8,9,10].map((num) => <ProductCard num={num} key={num} />)}
          </div>
        </div>
        <button onClick={scrollRight} className="arrow">Right</button>
      </div>
    </div>
  );
};

export default RelatedProducts;