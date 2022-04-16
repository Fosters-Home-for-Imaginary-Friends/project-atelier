import React, { useState, useEffect } from 'react';
import Answer from './Answer.jsx';

const AnswersList = ({ data, sortData }) => {
  const [moreAnswers, setMoreAnswers] = useState(false);
  const [init, setInit] = useState([]);
  const [answersSize, setAnswersSize] = useState(2);

  let answersArr = Object.values(data).sort((a, b) => {
    return b.helpfulness - a.helpfulness;
  });

  useEffect(() => {
    if (answersArr.length > 2) {
      setInit(answersArr.slice(0, answersSize));
      setMoreAnswers(true);
    } else {
      setInit(answersArr);
    }
  }, [])

  useEffect(() => {
    if (init.length === answersArr.length) {
      setMoreAnswers(false);
    }
  }, [init])

  let handleMoreAnswers = () => {
    setInit(answersArr.slice(0, answersSize + 2));
    setAnswersSize(answersSize + 2);
  }
  return (
    <div className="answer-list">
      {init.length > 0 ?
        init.map((answer) =>
          <Answer data={answer} key={answer.id}/>
        )
        : <h3 className="answer-list">Answers have not been submitted for this question</h3>
      }
      {moreAnswers ? <section onClick={handleMoreAnswers} className="body-text answer-list">Load More Answers</section> : null}
    </div>
  );
}

export default AnswersList;