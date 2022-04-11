import React, {useMemo, useRef, useEffect, useState} from 'react';
import {CompareButton, RemoveButton} from './ActionButtons.jsx';
import {getAverageRating} from './RelatedHelpers.js';
import StarRating from './StarRating.jsx';
import {getProduct, getStyles, getReviewMetadata} from '../../helpers.js';


const ProductCard = React.memo(function ProductCard({product_id, related}) {
  const productInfo = useRef(null);
  const styleData = useRef(null);
  const reviewData = useRef(null);
  const [loadState, setLoadState] = useState(false);

  useEffect(() => {
    getProduct(product_id)
      .then((product) => {
        productInfo.current = {category: product.category, name: product.name, features: product.features};
        return getStyles(product_id);
      })
      .then((style) => {
        styleData.current = {
          image: style[0].photos[0].thumbnail_url,
          salePrice: style[0].sale_price,
          originalPrice: style[0].original_price
        };
        return getReviewMetadata(product_id);
      })
      .then((reviews) => {
        reviewData.current = reviews.ratings;
        setLoadState(true);
      })
      .catch((err) => {
        console.error(err);
        setLoadState(false);
      });
  }, [product_id]);

  const averageRating = useMemo(() => getAverageRating(reviewData.current), [reviewData.current]);

  return (
    <div className="product-card">
      {loadState ?
      <React.Fragment>
        <div className="card-top">
        {related ? <CompareButton cardData={productInfo.current} /> :
        <RemoveButton />}
        {!styleData.current.image ?
        <div className="related-image no-image">NO IMAGE</div> :
        <img className="related-image" src={styleData.current.image} />
        }
      </div>
      <div className="card-bot">
        <section className="body-text">{productInfo.current.category}</section>
        <section className="related-name"><h2>{productInfo.current.name}</h2></section>
        {styleData.current.salePrice ?
          <div className="sale-price-container">
            <section className="body-text sale-price">{styleData.current.salePrice} USD</section>
            <section className="body-text original-price">{styleData.current.originalPrice} USD</section>
          </div> :
          <section className="body-text price">{styleData.current.originalPrice} USD</section>
        }
        <div className="average-star-container product-stars">
          {averageRating > 0 ? <StarRating averageRating={averageRating} /> : null}
        </div>
      </div>
      </React.Fragment>
      : null}
    </div>
  );
});

export default ProductCard;