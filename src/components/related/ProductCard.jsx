import React, {useMemo} from 'react';
import {CompareButton} from './ActionButtons.jsx';
import {getAverageRating} from './RelatedHelpers.js';
import StarRating from './StarRating.jsx';

const ProductCard = ({card, current}) => {
  let product = card.product;
  let style = card.styles[0];
  let imageUrl = style.photos[0].url;
  let ratings = card.reviews;
  const averageRating = useMemo(() => getAverageRating(ratings), [product.id]);

  return (
    <div className="product-card">
      <div className="card-top">
        <CompareButton card={product} current={current} />
        <img className="related-image" src={imageUrl ? imageUrl : null} />
      </div>
      <div className="card-bot">
        <section className="related-category">{product.category}</section>
        <section className="related-name"><h2>{product.name}</h2></section>
        {style.sale_price ?
          <div className="sale-price-container">
            <section className="body-text sale-price">{style.sale_price} USD</section>
            <section className="body-text original-price">{style.original_price} USD</section>
          </div> :
          <section className="body-text price">{style.original_price} USD</section>
        }
        <section className="average-star-container">
          {averageRating > 0 ? <StarRating averageRating={averageRating} /> : null}
        </section>
      </div>
    </div>
  );
};

export {ProductCard}