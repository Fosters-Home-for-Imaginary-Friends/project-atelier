import React, { useState } from 'react';
import AnswersList from './AnswersList.jsx';
import { AddAnswer } from './AddAnswer.jsx';

const Question = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  return (
    <div>
      <div className="question-head">
        <h2>{'Q: ' + props.data.question_body}</h2>
        {/* Helpful Link */}
        <span className="helpful-answer">
          Helpful? <a className="helpful">Yes</a>{' '}
          ({props.data.question_helpfulness}) | <a className="helpful" onClick={openModal}>Add Answer</a>
        </span>
        {showModal ? <AddAnswer setShowModal={setShowModal}/> : null}
      </div>
      {/* Question */}
      {/* Add Answer Link */}
      {/* Answer List */}
      <div>
        <AnswersList data={props.data.answers}/>
      </div>
      {/* More answers button */}
    </div>
  )
}

export default Question;