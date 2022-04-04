import React from 'react';
import data from './data.js';
import QuestionsList from './QuestionsList.jsx';

const Qna = (props) => {
  return (
    <div className="qna-container">
        <h3>Questions and Answers</h3>
      {/* Search Bar */}
      {/* Questions List */}
      <QuestionsList data={data.results}/>
      {/* See more questions button */}
      {/* Add a question button */}
    </div>
  );
}

export default Qna;