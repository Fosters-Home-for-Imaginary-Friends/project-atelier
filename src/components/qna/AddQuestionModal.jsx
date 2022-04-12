import React, { useRef, useContext } from 'react';
import ReactDom from "react-dom";
import {AppContext} from '../App.jsx';

export const AddQuestionModal = ({ setShowModal }) => {
  const modalRef = useRef();
  const {productData} = useContext(AppContext);
  const [questionValues, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return ReactDom.createPortal(
    <div className="add-question-container" ref={modalRef} onClick={closeModal}>
       <div className="question-modal">
        <h2>Add your Question</h2>
        <h3>About {productData.name} here</h3>
        <form>
          <label>
            Your Question *
          </label>
          <textarea rows="4" cols="50" maxLength="1000" type="text"/>
          <label>
            What is your nickname *
          </label>
          <input placeholder="Example: jackson11!" maxLength="60" type="text"/>
          <label>
            Your email *
          </label>
          <input placeholder="Why did you like the product or not?" type="email"/>
          <span className="user-data">For authentication reasons, you will not be emailed</span>
          <input type="submit" value="Submit Question" />
        </form>
        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("add-question-modal")
  )
}
