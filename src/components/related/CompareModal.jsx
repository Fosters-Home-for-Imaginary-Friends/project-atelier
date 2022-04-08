import React, {useRef, useContext, useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import {BsCheckLg} from 'react-icons/bs';
import {generateKey, getFeatures} from './RelatedHelpers.js';
import {getProduct} from '../../helpers.js';
import {AppContext} from '../App.jsx';

const CompareModal = React.memo (function CompareModal ({card, closeModal}) {
  const modalRef = useRef();
  const {productId} = useContext(AppContext);
  const [features, setFeatures] = useState(null);

  useEffect(() => {
    getProduct(productId)
      .then((overview) => {
        setFeatures(getFeatures(overview, card));
      })
      .catch((err) => console.error(err));
  }, [productId]);

  return ReactDom.createPortal(
    <div className="compare-modal-container" ref={modalRef}>
      <div className="modal-header">
        <h2 className="modal-title">Comparing</h2>
        <button onClick={closeModal} className="modal-button">X</button>
      </div>
      <div className="feature-container">
        {features ? <table className="feature-table">
          <thead>
            <tr>
              <th className="left">{features.currentName}</th>
              <th></th>
              <th className="right">{features.selectedName}</th>
            </tr>
          </thead>
          <ModalTableBody features={features.features} />
        </table> : <h1>LOADING</h1>}
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