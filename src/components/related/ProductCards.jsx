import React, {useMemo, useRef, useEffect, useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import {CompareButton, RemoveButton} from './ActionButtons.jsx';
import {getAverageRating, getProductInfo, generateKey} from './RelatedHelpers.js';
import {setCookie} from '../../Cookies.js';
import StarRating from './StarRating.jsx';
import {getProduct, getStyles, getReviewMetadata} from '../../helpers.js';

const ProductCard = React.memo(function ProductCard({product_id, related, setState}) {
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
        {related ? <CompareButton card={productInfo.current} /> :
        <RemoveButton setState={setState} product_id={product_id} />}
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

const AddProductCard = ({product_id, setOutfitList}) => {

  // TODO: Notify user that the card is already in their list
  const addProduct = () => {
    setOutfitList((prev) => {
      if (prev.includes(product_id)) {
        return prev;
      }
      let newList = prev.concat([product_id]);
      setCookie("outfitList", JSON.stringify(newList));
      return newList;
    });
  }

  return (
    <div className="product-card" id="add-card" onClick={addProduct}>
      <div id="add-button">
        <AiOutlinePlus size={150} />
      </div>
    </div>
  );
};

export {ProductCard, AddProductCard};