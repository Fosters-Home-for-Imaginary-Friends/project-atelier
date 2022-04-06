import React, { useState, createContext, useEffect } from 'react';
// import data from './data.js';
import QuestionsList from './QuestionsList.jsx';
import Search from './Search.jsx';
import {getQuestions} from '../../helpers.js';

// let data = [];
export const QnaContext = createContext([]);

const Qna = (props) => {
  const [question, setQuestion] = useState('');
  const [qnaList, setList] = useState([]);
  const [extra, setExtra] = useState(false);
  const [init, setInit] = useState([]);

  useEffect(() => {
    getQuestions(65633)
      .then((res) => {
        // console.log("Get request from QnA");
        let data = res.slice(0, 4);
        // setInit(res.slice(0, 4));
        if (res.length > 4) {
          setExtra(true);
        }
        setInit(data);
        setList(data);
      })
      .catch((err) => console.log(err));
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
    <QnaContext.Provider value={{question, setQuestion, qnaList, setList, extra, setExtra, init, setInit}} className="qna-container">
      <h3 className="qna-title">Questions and Answers</h3>
      {/* Search Bar */}
      <Search />
      {/* Questions List */}
      {/* <QuestionsList data={data.results}/> */}
      <QuestionsList data={init}/>
      {/* See more questions button */}
      {/* Add a question button */}
    </QnaContext.Provider >
  );
}

export default Qna;