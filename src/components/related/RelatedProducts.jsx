import React from 'react';
import CardCarousel from './CardCarousel.jsx';

const RelatedProducts = ({product_id}) => {
  return (
    <div className="product-list" id="related-list">
      <h3 className="related-title">WEAR WITH</h3>
      <CardCarousel product_id={product_id} related={true} />
    </div>
  );
}

export default RelatedProducts;