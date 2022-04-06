import React, {useState, useMemo} from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import CompareModal from './CompareModal.jsx';
import {getFeatures} from './relatedHelpers.js';

const CompareButton = ({current, selected}) => {

  const [modal, setModal] = useState(false);

  const openModal = () => {
    console.log("Open!");
    setModal(true);
  }

  const features = useMemo(() =>
    getFeatures(current, selected),
    [current.id, selected.id]);

  return (
    <div className="compare-button">
      <AiOutlineStar onClick={openModal} />
      {modal ? <CompareModal closeModal={() => setModal(false)} features={features} /> : null }
    </div>
  );
};

export {CompareButton};