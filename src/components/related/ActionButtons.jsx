import React, {useState, useContext} from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import {CgRemove} from 'react-icons/cg';
import CompareModal from './CompareModal.jsx';
import {setCookie, deleteCookie} from '../../Cookies.js';
import {OutfitContext} from './OutfitList.jsx';
import {IconContext} from 'react-icons';
import {AppContext} from '../App.jsx';

const CompareButton = ({cardData}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = (e) => {
    e.stopPropagation();
    setModal(() => modal ? false : true);
  }

  return (
    <div className="compare-button action-button">
      <IconContext.Provider value={{className: "action-icon"}}>
        <AiOutlineStar onClick={toggleModal} />
      </IconContext.Provider>
      {modal ? <CompareModal cardData={cardData} closeModal={toggleModal} /> : null }
    </div>
  );
};


const RemoveButton = () => {
  const {productData} = useContext(AppContext);
  const {setOutfitList} = useContext(OutfitContext);

  const removeCard = (e) => {
    e.stopPropagation();
    setOutfitList((prev) => {
      let newState = prev.filter((id) => {
        return productData.id !== id;
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
      <IconContext.Provider value={{className: "action-icon"}}>
        <CgRemove onClick={removeCard} />
      </IconContext.Provider>
    </div>
  );
};

export {CompareButton, RemoveButton};