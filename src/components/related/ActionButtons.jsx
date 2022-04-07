import React, {useState, useMemo} from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import {IoMdRemoveCircleOutline} from 'react-icons/IoMd';
import CompareModal from './CompareModal.jsx';
import {getFeatures} from './RelatedHelpers.js';

const CompareButton = ({card, current}) => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  }
  const features = useMemo(() =>
    getFeatures(current, card),
    [card.id, current.id]);

  return (
    <div className="compare-button">
      <AiOutlineStar onClick={openModal} />
      {modal ? <CompareModal features={features} closeModal={() => setModal(false)} /> : null }
    </div>
  );
};

const removeButton = ({setCardData, product}) => {

  const removeCard = () => {
    setCardData((cardData) => {
      let newCards = cardData.cards;
      newCards = newCards.filter((card, i) => {
        return card.id !== product.id;
      });
      let newCardIDs = cardData.cardIDs;
      newCardIDs[product.id] = false;

      return {cards: newCards, cardIDs: newCardIDs};
    });
  }
  return (
    <div className="remove-button" >
      <IoMdRemoveCircleOutline onClick={removeCard} />
    </div>
  );
};

export {CompareButton, removeButton};