import React, {useState} from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import {CgRemove} from 'react-icons/cg';
import CompareModal from './CompareModal.jsx';
import {setCookie, deleteCookie} from '../../Cookies.js';

const CompareButton = ({cardData}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(() => modal ? false : true);
  }

  return (
    <div className="compare-button action-button">
      <AiOutlineStar size={25} onClick={toggleModal} />
      {modal ? <CompareModal cardData={cardData} closeModal={toggleModal} /> : null }
    </div>
  );
};

//! Look into map objects
const RemoveButton = ({setState, product_id}) => {

  const removeCard = () => {
    setState((prev) => {
      let newState = prev.filter((id) => {
        return product_id !== id;
      });

    if (newState.length > 0) {
      setCookie("outfitList", JSON.stringify(newState));
    } else {
      deleteCookie("outfitList");
    }
    return newState;
    });
  }

  return (
    <div className="remove-button action-button" >
      <CgRemove size={25} onClick={removeCard} />
    </div>
  );
};

export {CompareButton, RemoveButton};