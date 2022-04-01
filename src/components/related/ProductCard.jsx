import React from 'react';

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <h1>{props.num}</h1>
    </div>
  );
};

export default ProductCard;