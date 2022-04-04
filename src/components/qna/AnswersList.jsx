import React from 'react';
import Answer from './Answer.jsx';

const AnswersList = (props) => {
  let answersArr = Object.values(props.data);
  let init = answersArr.slice(0, 2);
  return (
    <div>
      {init.map((answer) =>
        <Answer data={answer} key={answer.id}/>
      )}
    </div>
  );
}

export default AnswersList;