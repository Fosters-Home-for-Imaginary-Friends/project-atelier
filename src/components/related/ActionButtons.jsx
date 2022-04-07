import React, {useState, useMemo} from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import {CgRemove} from 'react-icons/cg';
import CompareModal from './CompareModal.jsx';
import {getFeatures} from './RelatedHelpers.js';
import {setCookie} from '../../Cookies.js';

const CompareButton = ({card, current}) => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  }
  const features = useMemo(() =>
    getFeatures(current, card),
    [card.id, current.id]);

  return (
    <div className="compare-button action-button">
      <AiOutlineStar size={25} onClick={openModal} />
      {modal ? <CompareModal features={features} closeModal={() => setModal(false)} /> : null }
    </div>
  );
};

//! Look into map objects
const RemoveButton = ({setCardData, card}) => {

  const removeCard = () => {
    setCardData((cardData) => {
      let newCardData = cardData.filter((item) => {
        return item.productData.product.id !== card.id;
      });
      setCookie("outfitList", JSON.stringify(newCardData.map((item) => item.productData.product.id)))
      return newCardData;
    });
  }
  return (
    <div className="remove-button action-button" >
      <CgRemove size={25} onClick={removeCard} />
    </div>
  );
};

export {CompareButton, RemoveButton};