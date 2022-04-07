import React, {useMemo, useState, useEffect} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import {CompareButton} from './ActionButtons.jsx';
import {getAverageRating, getProductInfo, generateKey} from './RelatedHelpers.js';
import StarRating from './StarRating.jsx';

const ProductCard = ({card, current, position}) => {
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

const AddProductCard = ({setCardData, current, cardIDs}) => {

  const addProduct = () => {
    if (cardIDs[current.id]) {
      console.log("Already Added!");
      return;
    }
    getProductInfo(current)
    .then((newCard) => {
      setCardData((cardData) => {
        let newCards = cardData.cards
        newCards = newCards.concat([(<ProductCard card={newCard} current={current} key={generateKey()} position={newCards.length} />)]);
        let newCardIDs = cardData.cardIDs;
        newCardIDs[current.id] = true;

        return {cards: newCards, cardIDs: newCardIDs};
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