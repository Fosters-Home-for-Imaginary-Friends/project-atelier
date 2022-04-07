import React, {useState, useMemo, useContext, useEffect} from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import {CgRemove} from 'react-icons/cg';
import CompareModal from './CompareModal.jsx';
import {getFeatures} from './RelatedHelpers.js';
import {setCookie, deleteCookie} from '../../Cookies.js';


const CompareButton = ({card}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(() => modal ? false : true);
  }

  return (
    <div className="compare-button action-button">
      <AiOutlineStar size={25} onClick={toggleModal} />
      {modal ? <CompareModal card={card} closeModal={toggleModal} /> : null }
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
      if (newCardData.length > 0) {
        setCookie("outfitList", JSON.stringify(newCardData.map((item) => item.productData.product.id)));
      } else {
        deleteCookie("outfitList");
      }

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