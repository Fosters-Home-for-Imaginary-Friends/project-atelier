import React from 'react';
import Question from './Question.jsx';

const QuestionsList = (props) => {
  return(
    <div>
      {props.data.map((product) =>
        <Question data={product} key={product.question_id}/>
      )}
    </div>
  );
}

export default QuestionsList;