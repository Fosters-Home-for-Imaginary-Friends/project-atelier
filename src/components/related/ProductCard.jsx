import React from 'react';
import {AiOutlineStar} from 'react-icons/ai';

const ProductCard = ({product, styles}) => {

  return (
    <div className="product-card">
      <img className="related-image" src={styles[0].photos[0].url} />
      <AiOutlineStar />
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