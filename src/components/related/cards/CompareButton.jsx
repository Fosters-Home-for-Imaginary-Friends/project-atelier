import React, {useState} from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import CompareModal from '../related/CompareModal.jsx';
import {IconContext} from 'react-icons';

//! pass setModalData to CompareButton, when modalData is set modal renders.
export default function CompareButton ({cardData}) {
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
}