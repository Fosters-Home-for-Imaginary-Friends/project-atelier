import React, {useRef} from 'react';
import ReactDom from 'react-dom';
import {BsCheckLg} from 'react-icons/bs';
import {generateKey} from './RelatedHelpers.js';

const CompareModal = ({closeModal, features}) => {
  const modalRef = useRef();

  return ReactDom.createPortal(
    <div className="compare-modal-container" ref={modalRef}>
      <div className="modal-header">
        <h2 className="modal-title">Comparing</h2>
        <button onClick={closeModal} className="modal-button">X</button>
      </div>
      <div className="feature-container">
        <table className="feature-table">
          <thead>
            <tr>
              <th className="left">{features.currentName}</th>
              <th></th>
              <th className="right">{features.selectedName}</th>
            </tr>
          </thead>
          <ModalTableBody features={features.features} />
        </table>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

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

  function parseValue (value) {
    switch (value) {
      case null:
        return (<BsCheckLg />);
      case false:
        return "";
      default:
        return value.split('"')[1];
    }
  }

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