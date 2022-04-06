import React, { useState, createContext, useEffect } from 'react';
// import data from './data.js';
import QuestionsList from './QuestionsList.jsx';
import Search from './Search.jsx';
import {getQuestions} from '../../helpers.js';

let data = [];
export const QnaContext = createContext(data);

const Qna = (props) => {
  const [question, setQuestion] = useState('');
  const [qnaList, setList] = useState([]);

  useEffect(() => {
    getQuestions(65632)
      .then((res) => {
        console.log(res);
        data = res;
      })
  }, [])

  // useEffect(() => {
  //   if (question.length > 3) {
  //     let newList = [];
  //     for (let i = 0; i < qnaList.length; i++) {
  //       if (qnaList[i].question_body.toLowerCase().indexOf(question.toLowerCase()) !== -1) {
  //         newList.push(qnaList[i])
  //       }
  //     }
  //     setList(newList)
  //   } else {
  //     setList(data.results);
  //   }
  // }, [question])



  return (
    <QnaContext.Provider value={{question, setQuestion, qnaList, setList}} className="qna-container">
      <h3 className="qna-title">Questions and Answers</h3>
      {/* Search Bar */}
      <Search />
      {/* Questions List */}
      {/* <QuestionsList data={data.results}/> */}
      <QuestionsList data={data}/>
      {/* See more questions button */}
      {/* Add a question button */}
    </QnaContext.Provider >
  );
}

export default Qna;