import React, {useState, useMemo, useEffect} from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import CompareModal from './CompareModal.jsx';

const CompareButton = ({current, selected, keyNum}) => {

  const [modal, setModal] = useState(false);
  const [key, setKey] = useState(JSON.stringify(keyNum))

  const openModal = () => {
    modal(true);
  }

  const compare = {
    right: 0,
    position: 'absolute',
    zIndex: 9,
    color: 'gold',
    width: '25px',
    height: '25px'
  };


  return (
    <div className={key}>
      <AiOutlineStar style={compare} onClick={openModal} />
      {modal ? <CompareModal closeModal={() => setModal(false)} key={key} /> : null }
    </div>
  );
};

export {CompareButton};