import React, { useState, createContext, useEffect, useContext } from 'react';
// import data from './data.js';
import QuestionsList from './QuestionsList.jsx';
import Search from './Search.jsx';
import {getQuestions} from '../../helpers.js';
import {AppContext} from '../App.jsx';

// let data = [];
export const QnaContext = createContext([]);

const Qna = (props) => {
  const [question, setQuestion] = useState('');
  const [qnaList, setQnaList] = useState([]);
  const [extra, setExtra] = useState(false);
  const [init, setInit] = useState([]);
  const {productId} = useContext(AppContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // getQuestions(productId)
    getQuestions(65633)
      .then((res) => {
        // console.log("Get request from QnA");
        let data = res.slice(0, 4);
        // setInit(res.slice(0, 4));
        if (res.length > 4) {
          setExtra(true);
        }
        setInit(data);
        setQnaList(data);
      })
      .catch((err) => console.log(err));
  }, [])


  return (
    <QnaContext.Provider value={{question, setQuestion, qnaList, setQnaList, extra, setExtra, init, setInit}}>
      <div className="qna-container">
        <h3 className="qna-title">Questions and Answers</h3>
        {/* Search Bar */}
        <Search />
        {/* Questions List */}
        {/* <QuestionsList data={data.results}/> */}
        <QuestionsList data={init}/>
        {/* See more questions button */}
        {/* Add a question button */}
      </div>
    </QnaContext.Provider >
  );
}

export default Qna;