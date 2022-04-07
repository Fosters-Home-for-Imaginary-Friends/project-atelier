import React, {useRef, useMemo, useState} from 'react';
import {CompareButton} from './ActionButtons.jsx';
import {Star} from '../ratings/AverageStars.jsx';
import {getAverageRating, getStarFill} from './RelatedHelpers.js';

const ProductCard = ({card, current}) => {

  let product = card.product;
  let styles = card.styles;
  let ratings = card.reviews;

  const averageRating = useMemo(() => getAverageRating(ratings), [product.id]);

  const cardRef = useRef();

  return (
    <div className="product-card">
      <div className="card-top" ref={cardRef}>
        <CompareButton card={product} current={current} />
        <img className="related-image" src={styles[0].photos[0].url ? styles[0].photos[0].url : null} />
      </div>
      <div className="card-bot">
        <span className="related-category">{product.category}</span><br />
        <span className="related-name">{product.name}</span><br />
        <span className="related-price">{product.default_price}</span> <br />
        <div className="average-star-container">{averageRating > 0 ? <StarRating /> : null}</div>
      </div>
    </div>
  );
};

//! CREATE UNIQUE KEY FOR EACH STAR
const StarRating = ({averageRating}) => {

  const starFill = useMemo(() => getStarFill(averageRating), [averageRating]);

  return (
    <div className="average-star-container">
      {starFill.map((fill, i) => <Star fill={fill} key={i} />)}
    </div>
  );
};


export {ProductCard, StarRating}