import React from 'react';

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div className="related-image">
        <h1>{props.num}</h1>
      </div>
      <div className="related-info">
        <span className="related-category">Category</span><br />
        <span className="related-name">Product Name</span><br />
        <span className="related-price">$99999</span> <br />
        <span className="related-rating">stars</span>
      </div>

    </div>
  );
};

export default ProductCard;