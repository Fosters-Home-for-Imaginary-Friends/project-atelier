import React, {useState, useMemo} from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import CompareModal from './CompareModal.jsx';
import {getFeatures} from './RelatedHelpers.js';

const CompareButton = ({card, current}) => {

  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  }

  const features = useMemo(() =>
    getFeatures(current, card),
    [current.id, card.id]);

  return (
    <div className="compare-button">
      <AiOutlineStar onClick={openModal} />
      {modal ? <CompareModal closeModal={() => setModal(false)} features={features} /> : null }
    </div>
  );
};

export {CompareButton};