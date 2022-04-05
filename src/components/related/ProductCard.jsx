import React from 'react';
import {AiOutlineStar} from 'react-icons/ai';

const ProductCard = ({product, styles}) => {
  const actionStyle = {
    right: 0,
    position: 'absolute',
    zIndex: 9,
    color: 'gold',
    width: '25px',
    height: '25px'
  };

  return (
    <div className="product-card">
      <div className="card-top">
        <AiOutlineStar style={actionStyle} onClick={() => {}} />
        <img className="related-image" src={styles[0].photos[0].url} />
      </div>
      <div className="card-bot">
        <span className="related-category">{product.category}</span><br />
        <span className="related-name">{product.name}</span><br />
        <span className="related-price">{product.default_price}</span> <br />
        <span className="related-rating">stars</span>
      </div>

    </div>
  );
};

export default ProductCard;