import React from 'react';
import AnswersList from './AnswersList.jsx';

const Question = (props) => {
  return (
    <div>
      <div className="question-head">
        <h2>{'Q: ' + props.data.question_body}</h2>
        {/* Helpful Link */}
        <span className="helpful-answer">
          Helpful? <a className="helpful">Yes</a>{' '}
          ({props.data.question_helpfulness}) | <a className="helpful">Add Answer</a>
        </span>
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