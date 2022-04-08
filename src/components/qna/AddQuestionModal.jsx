import React, { useRef } from 'react';
import ReactDom from "react-dom";

export const AddQuestionModal = ({ setShowModal }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return ReactDom.createPortal(
    <div className="add-question-container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <h2>Add a Question</h2>
        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("add-question-modal")
  )
}
