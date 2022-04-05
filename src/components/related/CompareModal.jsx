import React, {useRef, useEffect, useState} from 'react';
import ReactDom from 'react-dom';

const CompareModal = ({toggleModalView, modalView, features}) => {
  const modalRef = useRef();
  useEffect(() => {

  }, [features]);

  return ReactDom.createPortal(
    <div className="compare-modal-container" ref={modalRef} style={modalView}>
      <div className="modal-header">
        <h2 className="modal-title">Comparing</h2>
        <button onClick={toggleModalView} className="modal-button">X</button>
      </div>
      <div className="feature-container">
        <table className="feature-table">
          <thead>
            <th>Current</th>
            <th></th>
            <th>Selected</th>
          </thead>
        </table>
      </div>
    </div>,
    document.getElementById("root")
  );
}

const ModalTableBody = ({features}) => {

};


export default CompareModal;