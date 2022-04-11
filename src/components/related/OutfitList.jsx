import React from 'react';
import CardCarousel from './CardCarousel.jsx';

const OutfitList = ({product_id}) => {

  return (
    <div className="product-list" id="outfit-list">
      <h3 className="related-title">YOUR OUTFIT</h3>
      <CardCarousel product_id={product_id} />
    </div>
  );
};

export default OutfitList;