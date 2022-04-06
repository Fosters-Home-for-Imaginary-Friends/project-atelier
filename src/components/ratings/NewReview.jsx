//this component will house the elements to build the new review modal
import React, { useRef } from 'react';
import ReactDom from 'react-dom';

let NewReview = ({ setShowModal }) => {

  //close this modal when clicking outside of the modal.
  const modalRef = useRef();
  const exitModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  // we need to render the modal using the new-review div in index.html
  return ReactDom.createPortal (
    <div className= "new-review-container" ref={modalRef} onClick={exitModal}>
      <div className="modal">
        <h1> Hey Nerds!!! </h1>
        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("newReview")
  );
};

export default NewReview;