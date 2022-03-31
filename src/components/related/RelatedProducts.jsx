import React from 'react';
import ProductCard from './ProductCard.jsx';

const RelatedProducts = () => {

  return (
    <div className="related-products">
      <div className="related-product-carousel">
        {[1,2,3,4,5,6,7,8,9,10].map((num) => <ProductCard key={num} />)}
      </div>
    </div>
  );
};

export default RelatedProducts;