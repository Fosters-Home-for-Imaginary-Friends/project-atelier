import React from 'react';
import AnswersList from './AnswersList.jsx';

const Question = (props) => {
  return (
    <div>
      {/* Question */}
      <h2>{'Q: ' + props.data.question_body}</h2>
      {/* Helpful Link */}
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