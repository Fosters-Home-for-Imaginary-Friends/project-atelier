import React from 'react';
import Answer from './Answer.jsx';

const AnswersList = (props) => {
  let answersArr = Object.values(props.data);
  let init = answersArr.slice(0, 2);
  return (
    <div className="answer-list">
      {init.length > 0 ?
        init.map((answer) =>
          <Answer data={answer} key={answer.id}/>
        )
        : <h3 className="answer-list">Answers have not been submitted for this question</h3>
      }
    </div>
  );
}

export default AnswersList;