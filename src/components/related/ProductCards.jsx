import React, {useMemo, useRef, useEffect, useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import {CompareButton, RemoveButton} from './ActionButtons.jsx';
import {getAverageRating, getProductInfo, generateKey} from './RelatedHelpers.js';
import {setCookie} from '../../Cookies.js';
import StarRating from './StarRating.jsx';
import {getProduct, getStyles, getReviewMetadata} from '../../helpers.js';

const ProductCard = React.memo(function ProductCard({product_id}) {
  const productInfo = useRef(null);
  const styleData = useRef(null);
  const reviewData = useRef(null);
  const features = useRef(null);
  const [loadState, setLoadState] = useState(false);

  useEffect(() => {
    getProduct(product_id)
      .then((product) => {
        productInfo.current = {category: product.category, name: product.name};
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

        <img className="related-image" src={styleData.current.image} />
      </div>
      <div className="card-bot">
        <section className="related-category">{productInfo.current.category}</section>
        <section className="related-name"><h2>{productInfo.current.name}</h2></section>
        {styleData.current.salePrice ?
          <div className="sale-price-container">
            <section className="body-text sale-price">{styleData.current.salePrice} USD</section>
            <section className="body-text original-price">{styleData.current.originalPrice} USD</section>
          </div> :
          <section className="body-text price">{styleData.current.originalPrice} USD</section>
        }
        <div className="average-star-container">
          {averageRating > 0 ? <StarRating averageRating={averageRating} /> : null}
        </div>
      </div>
      </React.Fragment>
      : null}
    </div>
  );
});
/* {related ? <CompareButton card={product} current={current} /> :
<RemoveButton setCardData={setCardData} card={product} />} */

/* */

const AddProductCard = ({setCardData, current, cardData}) => {

  // TODO: Notify user that the card is already in their list
  const addProduct = () => {
    for (let i = 0; i < cardData.length; i++) {
      if (cardData[i].productData.product.id === current.id) {
        console.log("Already in your list!");
        return;
      }
    }

    // TODO: fully utilize newCard from getProductInfo
    // TODO: Make functions of OutfitList children shared
    getProductInfo(current)
    .then((newCardInfo) => {
      setCardData((newCardData) => {
        let newCards = newCardData;
        let newCard = {card: (<ProductCard setCardData={setCardData} card={newCardInfo} current={current} key={generateKey()} related={false} />),
        productData: newCardInfo}
        newCards = newCards.concat([newCard]);
        // setCookie("outfitList", JSON.stringify(newCards));
        setCookie("outfitList", JSON.stringify(newCards.map((card) => card.productData.product.id)))
        return newCards;
      })})
    .catch((err) => console.error(err));
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