import React from 'react';

const ProductCard = ({product}) => {
  return (
    <div className="product-card">
      <div className="related-image">
        <h1>Card</h1>
      </div>
      <div className="related-info">
        <span className="related-category">{product.category}</span><br />
        <span className="related-name">{product.name}</span><br />
        <span className="related-price">{product.default_price}</span> <br />
        <span className="related-rating">stars</span>
      </div>

    </div>
  );
};

export default ProductCard;