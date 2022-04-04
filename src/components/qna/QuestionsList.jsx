import React from 'react';
import Question from './Question.jsx';

const QuestionsList = (props) => {
  let init = props.data.slice(0, 4);
  return(
    <div className="questions-list">
      {init.map((product) =>
        <Question data={product} key={product.question_id}/>
      )}
    </div>
  );
}

export default QuestionsList;