import React, {useState, useEffect} from 'react';
import CardCarousel from './CardCarousel.jsx';
import {ProductCard, AddProductCard} from './ProductCards.jsx';

const OutfitList = ({current}) => {
  const [cardData, setCardData] = useState({cards: [], cardIDs: {}});

  useEffect(() => {
  }, []);

  // const addProduct = (product) => {
  //   setCards((cards) => cards.concat([product]));
  // };

  return (
    <div className="product-list" id="outfit-list">
      <span>Your Outfit</span>
      <CardCarousel cards={[<AddProductCard key={new Date().getTime()}
      setCardData={setCardData} current={current} cardIDs={cardData.cardIDs} />].concat(cardData.cards)} />
    </div>
  );
};

export default OutfitList;