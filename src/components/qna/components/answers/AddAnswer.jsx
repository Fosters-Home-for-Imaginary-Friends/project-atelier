import React, { useRef, useState, useContext } from 'react';
import ReactDom from 'react-dom';
import { AppContext } from '../../../context/AppContext.jsx';
import { postAnswer } from '../../../../helpers.js';

export const AddAnswer = ({ setShowModal, question }) => {
  const modalRef = useRef();
  const { productData } = useContext(AppContext);
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [answerValues, setValues] = useState({
    body: '',
    name: '',
    email: ''
  });

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  const handleAnswerInputChange = (event) => {
    event.persist();
    setValues((answerValues) => ({
      ...answerValues,
      body: event.target.value,
    }));
  };

  const handleNameInputChange = (event) => {
    event.persist();
    setValues((answerValues) => ({
      ...answerValues,
      name: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((answerValues) => ({
      ...answerValues,
      email: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(answerValues.body && answerValues.name && answerValues.email) {
      postAnswer(question.question_id, answerValues)
        .then((res) => {
          console.log(res);
          setSubmitted(true);
        });
    }
    setValid(true);
  }

  return ReactDom.createPortal(
    <div className="add-question-container" ref={modalRef} onClick={closeModal}>
      {!submitted ?
        <div className="question-modal">
          <h2>Submit Your Answer</h2>
          <h3>{productData.name}: {question.question_body}</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Your Answer *
            </label>
            <textarea rows="4" cols="50" maxLength="1000" type="text" onChange={handleAnswerInputChange}/>
            {valid && !answerValues.body && <h3 id='answer-error'>Please enter an answer</h3>}
            <label>
              What is your nickname *
            </label>
            <input placeholder="Example: jack543!" maxLength="60" type="text" onChange={handleNameInputChange}/>
            {valid && !answerValues.name && <h3 id='answer-error'>Please enter a nickname</h3>}
            <label>
              Your email *
            </label>
            <input placeholder="Example: jack@email.com" type="email" onChange={handleEmailInputChange}/>
            {valid && !answerValues.body && <h3 id='answer-email-error'>Please enter an email</h3>}
            <span className="user-data">For authentication reasons, you will not be emailed</span>
            <input type="submit" value="Submit Answer" />
          </form>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
      :
        <div className="question-modal">
          <h3>Thank you! Your answer has been submitted</h3>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
      }
    </div>,
    document.getElementById("add-question-modal")
  )
}