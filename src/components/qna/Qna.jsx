import React, { useState, createContext, useEffect } from 'react';
import data from './data.js';
import QuestionsList from './QuestionsList.jsx';
import Search from './Search.jsx';

export const QnaContext = createContext(data);

const Qna = (props) => {
  const [question, setQuestion] = useState('');
  const [qnaList, setList] = useState([]);

  useEffect(() => {
    if (question.length > 3) {
      let newList = [];
      for (let i = 0; i < qnaList.length; i++) {
        if (qnaList[i].question_body.toLowerCase().indexOf(question.toLowerCase()) !== -1) {
          newList.push(qnaList[i])
        }
        // console.log(question.toLowerCase())
      }
      setList(newList)
    } else if (question.length === 0) {
      setList(data.results);
    }
  }, [question])

  return (
    <QnaContext.Provider value={{question, setQuestion}} className="qna-container">
      <h3 className="qna-title">Questions and Answers</h3>
      {/* Search Bar */}
      <Search />
      {/* Questions List */}
      {/* <QuestionsList data={data.results}/> */}
      <QuestionsList data={qnaList}/>
      {/* See more questions button */}
      {/* Add a question button */}
    </QnaContext.Provider >
  );
}

export default Qna;