import React, {useRef} from 'react';
import {CompareButton} from './ActionButtons.jsx';
import AverageStars, {Star} from '../ratings/AverageStars.jsx';

const ProductCard = ({card, styles, current, reviews}) => {

  const cardRef = useRef();

  return (
    <div className="product-card">
      <div className="card-top" ref={cardRef}>
        <CompareButton card={card} current={current} />
        <img className="related-image" src={styles[0].photos[0].url ? styles[0].photos[0].url : null} />
      </div>
      <div className="card-bot">
        <span className="related-category">{card.category}</span><br />
        <span className="related-name">{card.name}</span><br />
        <span className="related-price">{card.default_price}</span> <br />
        <AverageStars />
      </div>

    </div>
  );
};

export default ProductCard;