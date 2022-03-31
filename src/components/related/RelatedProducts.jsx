import React, {useRef} from 'react';
import ProductCard from './ProductCard.jsx';

const RelatedProducts = () => {
  const carouselRef = useRef(null);
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
      <div className="carousel-container">
        <button onClick={scrollLeft} className="arrow">Left</button>
        <div ref={carouselRef} className="carousel-viewport">
          <div className="carousel">
            {[1,2,3,4,5,6,7,8,9,10].map((num) => <ProductCard num={num} key={num} />)}
          </div>
        </div>
        <button onClick={scrollRight} className="arrow">Right</button>
      </div>
    </div>
  );
};

export default RelatedProducts;