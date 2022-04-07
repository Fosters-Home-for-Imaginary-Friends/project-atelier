import React, {useState, useEffect} from 'react';
import CardCarousel from './CardCarousel.jsx';
import {AddProductCard} from './ProductCards.jsx';
import {generateKey} from './RelatedHelpers.js';

const OutfitList = ({current}) => {
  const [cardData, setCardData] = useState([]);
  //{card: <ProductCard />, productData: getRelatedProductsData()}
  //TODO: optimize map function

  return (
    <div className="product-list" id="outfit-list">
      <span>Your Outfit</span>
      <CardCarousel cards={[<AddProductCard key={generateKey()}
      setCardData={setCardData} current={current} cardData={cardData} />].concat(cardData.map((item) => item.card))} />
    </div>
  );
};

export default OutfitList;