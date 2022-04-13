import React, { useRef, useContext, useState } from 'react';
import ReactDom from "react-dom";
import {AppContext} from '../App.jsx';
import { postQuestion } from '../../helpers.js';

export const AddQuestionModal = ({ setShowModal }) => {
  const modalRef = useRef();
  const {productData} = useContext(AppContext);
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [questionValues, setValues] = useState({
    body: '',
    name: '',
    email: '',
    product_id: productData.id
  });

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  const handleQuestionInputChange = (event) => {
    event.persist();
    setValues((questionValues) => ({
      ...questionValues,
      body: event.target.value,
    }));
  };

  const handleNameInputChange = (event) => {
    event.persist();
    setValues((questionValues) => ({
      ...questionValues,
      name: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((questionValues) => ({
      ...questionValues,
      email: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(questionValues.body && questionValues.name && questionValues.email) {
      postQuestion(questionValues)
        .then((res) => {
          console.log(res);
          setSubmitted(true);
        });
    }
    setValid(true);
  }

  return ReactDom.createPortal(
    <div className="add-question-container" ref={modalRef} onClick={closeModal}>
      {submitted ?
        <div className="question-modal">
          <h3>Thank you! Your question has been submitted</h3>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        :
        <div className="question-modal">
          <h2>Add your Question</h2>
          <h3>About {productData.name} here</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Your Question *
            </label>
            <textarea rows="4" cols="50" maxLength="1000" type="text" onChange={handleQuestionInputChange}/>
            {valid && !questionValues.body && <h3 id='question-error'>Please enter a question</h3>}
            <label>
              What is your nickname *
            </label>
            <input placeholder="Example: jackson11!" maxLength="60" type="text" onChange={handleNameInputChange}/>
            {valid && !questionValues.name && <h3 id='question-nickname-error'>Please enter a nickname</h3>}
            <label>
              Your email *
            </label>
            <input placeholder="Why did you like the product or not?" type="email" onChange={handleEmailInputChange}/>
            {valid && !questionValues.email && <h3 id='question-email-error'>Please enter a email</h3>}
            <span className="user-data">For authentication reasons, you will not be emailed</span>
            <input type="submit" value="Submit Question" />
          </form>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
      }
    </div>,
    document.getElementById("add-question-modal")
  )
}
