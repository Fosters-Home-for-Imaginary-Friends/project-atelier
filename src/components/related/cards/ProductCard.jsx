import React, {useEffect, useState, useMemo} from 'react';
import {getAverageRating, productCardComparison} from '../utils/RelatedHelpers.js';
import StarRating from './StarRating.jsx';
import {getProduct, getStyles, getReviewMetadata} from '../../../helpers.js';
import CompareButton from './CompareButton.jsx';
import RemoveButton from './RemoveButton.jsx';

const ProductCard = React.memo(function ProductCard({product_id, related, setProductData}) {
  const [cardData, setCardData] = useState({});

  useEffect(() => {
      getProduct(product_id)
      .then((productData) => getStyles(product_id)
        .then((styleData) => getReviewMetadata(product_id)
          .then((reviewData) => {
            setCardData({productData, styleData, reviewData: reviewData.ratings});
          })))
      .catch((err) => console.error(err));
  }, [product_id]);

  const handleCardClick = () => {
    setProductData((prev) => {
      return prev.id === cardData.productData.id ? prev : cardData.productData;
    });
  };

  const averageRating = useMemo(() => getAverageRating(cardData.reviewData), [cardData]);

  return (
    <div className="product-card" onClick={handleCardClick}>
        <div className="card-top">
          {related ? <CompareButton cardData={cardData.productData} /> : <RemoveButton product_id={product_id} />}
          {cardData.styleData && cardData.styleData[0].photos[0].thumbnail_url ?
          <img className="related-image" src={cardData.styleData[0].photos[0].thumbnail_url} /> :
          <div className="related-image no-image">NO IMAGE</div>}
      </div>
      <div className="card-bot">
        <section className="body-text">{cardData.productData ? cardData.productData.category : null}</section>
        <section className="related-name"><h2>{cardData.productData ? cardData.productData.name : null}</h2></section>
        {cardData.styleData ? (cardData.styleData[0].sale_price ?
          (<div className="sale-price-container">
            <section className="body-text sale-price">{cardData.styleData[0].sale_price} USD</section>
            <section className="body-text original-price">{cardData.styleData[0].original_price} USD</section>
          </div>) :
          (<section className="body-text price">{cardData.styleData[0].original_price} USD</section>)) : null
        }
        <div className="average-star-container product-stars">
          {averageRating > 0 ? <StarRating averageRating={averageRating} /> : null}
        </div>
      </div>
    </div>
  );
}, productCardComparison);

export default ProductCard;