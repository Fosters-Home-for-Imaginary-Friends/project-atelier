import React, {useRef} from 'react';
import ProductCard from './ProductCard.jsx';

const RelatedProducts = () => {
  const carouselRef = useRef(null);

  return (
    <div className="related-products">
      <span>Related Products</span>
      <div className="carousel-container">
        <button className="arrow">Left</button>
        <div className="carousel-viewport">
          <div className="carousel">
            {[1,2,3,4,5,6,7,8,9,10].map((num) => <ProductCard num={num} key={num} />)}
          </div>
        </div>
        <button className="arrow">Right</button>
      </div>
    </div>
  );
};

export default RelatedProducts;