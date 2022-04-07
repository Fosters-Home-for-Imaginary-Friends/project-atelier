import React, {useMemo} from 'react';
import {CompareButton} from './ActionButtons.jsx';
import {getAverageRating} from './RelatedHelpers.js';
import StarRating from './StarRating.jsx';

const ProductCard = ({card, current}) => {
  let product = card.product;
  let imageUrl = card.styles[0].photos[0].url;
  let ratings = card.reviews;
  const averageRating = useMemo(() => getAverageRating(ratings), [product.id]);

  return (
    <div className="product-card">
      <div className="card-top">
        <CompareButton card={product} current={current} />
        <img className="related-image" src={imageUrl ? imageUrl : null} />
      </div>
      <div className="card-bot">
        <span className="related-category">{product.category}</span><br />
        <span className="related-name">{product.name}</span><br />
        <span className="related-price">{product.default_price}</span> <br />
        <div className="average-star-container">{averageRating > 0 ? <StarRating averageRating={averageRating} /> : null}</div>
      </div>
    </div>
  );
};

export {ProductCard}