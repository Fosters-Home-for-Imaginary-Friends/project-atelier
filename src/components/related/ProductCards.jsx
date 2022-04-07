import React, {useMemo} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import {CompareButton, RemoveButton} from './ActionButtons.jsx';
import {getAverageRating, getProductInfo, generateKey} from './RelatedHelpers.js';
import StarRating from './StarRating.jsx';

const ProductCard = ({card, current, position, related, setCardData}) => {
  let product = card.product;
  let style = card.styles[0];
  let imageUrl = style.photos[0].url;
  let ratings = card.reviews;
  const averageRating = useMemo(() => getAverageRating(ratings), [product.id]);

  return (
    <div className="product-card">
      <div className="card-top">
        {related ? <CompareButton card={product} current={current} /> :
        <RemoveButton setCardData={setCardData} card={product} />}
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