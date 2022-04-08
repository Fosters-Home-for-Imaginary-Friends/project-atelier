import React from 'react';
import CardCarousel from './CardCarousel.jsx';

const OutfitList = ({product_id}) => {

  return (
    <div className="product-list" id="outfit-list">
      <span>Your Outfit</span>
      <CardCarousel product_id={product_id} />
    </div>
  );
};

export default OutfitList;