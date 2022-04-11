import React, { useRef } from 'react';
import ReactDom from 'react-dom';

export const AddAnswer = ({ setShowModal }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  return ReactDom.createPortal(
    <div className="add-question-container" ref={modalRef} onClick={closeModal}>
      <div className="question-modal">
        <h2>Submit Your Answer</h2>
        {/* <h3>About {productData.name} here</h3> */}
        <form>
          <label>
            Your Answer *
          </label>
          <textarea rows="4" cols="50" maxLength="1000" type="text"/>
          <label>
            What is your nickname *
          </label>
          <input placeholder="Example: jack543!" maxLength="60" type="text"/>
          <label>
            Your email *
          </label>
          <input placeholder="Example: jack@email.com" type="email"/>
          <span className="user-data">For authentication reasons, you will not be emailed</span>
          <input type="submit" value="Submit Answer" />
        </form>
        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("add-question-modal")
  )
}