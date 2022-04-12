import React, {useRef, useContext, useMemo} from 'react';
import ReactDom from 'react-dom';
import {BsCheckLg} from 'react-icons/bs';
import {generateKey, getFeatures} from './RelatedHelpers.js';
import {AppContext} from '../App.jsx';

const CompareModal = React.memo (function CompareModal ({cardData, closeModal}) {
  const modalRef = useRef();
  const {productData} = useContext(AppContext);

  const features = useMemo(() => getFeatures(productData, cardData), [productData, cardData])
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return ReactDom.createPortal(
    <div className="compare-modal-container" ref={modalRef} onClick={handleClick}>
      <div className="modal-header">
        <h3 className="modal-title">COMPARING</h3>
        <button onClick={closeModal} className="modal-button">X</button>
      </div>
      <div className="feature-container">
        <table className="feature-table">
          <thead>
            <tr>
              <th className="left">{features.currentName}</th>
              <th className="center"></th>
              <th className="right">{features.selectedName}</th>
            </tr>
          </thead>
          <ModalTableBody features={features.features} />
        </table>
      </div>
    </div>,
    document.getElementById("modal")
  );
});

const ModalTableBody = ({features}) => {
  return (
    <React.Fragment>
      <tbody>
        {Object.keys(features).map((feature) => <ModalTableRow key={generateKey(feature)} name={feature} values={features[feature]} />)}
      </tbody>
    </React.Fragment>
  );
};

const ModalTableRow = ({name, values}) => {
  const parseValue = (value) => {
    switch (value) {
      case null:
        return (<BsCheckLg />);
      case false:
        return "";
      default:
        return value;
    }
  };

  return (
    <React.Fragment>
      <tr>
        <td className="left">{parseValue(values.current)}</td>
        <td className="center">{name}</td>
        <td className="right">{parseValue(values.selected)}</td>
      </tr>
    </React.Fragment>
  );
}

export default CompareModal;