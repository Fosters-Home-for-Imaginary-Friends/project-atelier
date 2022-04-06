import React, {useState, useMemo, useEffect} from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import CompareModal from './CompareModal.jsx';

const CompareButton = ({current, selected, id}) => {

  const [modal, setModal] = useState(false);

  const openModal = () => {
    console.log("Open!");
    setModal(true);
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
    <div id={id} style={compare}>
      <AiOutlineStar onClick={openModal} />
      {modal ? <CompareModal closeModal={() => setModal(false)} id={id} /> : null }
    </div>
  );
};

export {CompareButton};