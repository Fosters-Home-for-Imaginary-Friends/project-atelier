import React, {useRef} from 'react';
import {CompareButton} from './ActionButtons.jsx';

const ProductCard = ({product, styles, current, id}) => {
  const actionStyle = {
    right: 0,
    position: 'absolute',
    zIndex: 9,
    color: 'gold',
    width: '25px',
    height: '25px'
  };

  const cardRef = useRef();

  return (
    <div className="product-card">
      <div className="card-top" ref={cardRef}>
        <CompareButton id={id} />
        <img className="related-image" src={styles[0].photos[0].url ? styles[0].photos[0].url : null} />
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