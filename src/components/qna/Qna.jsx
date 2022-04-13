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
  const [extra, setExtra] = useState(true);
  const [init, setInit] = useState([]);
  const {productData} = useContext(AppContext);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    if (!productData.id) {
      return;
    }
    getQuestions(productData.id, 1, 9999)
      .then((res) => {
        let data = sortData(res);

        if (res.length < 4) {
          setExtra(false);
        }
        setInit(data);
        setQnaList(data.slice(0, 4));
      })
      .catch((err) => console.log(err));
  }, [productData.id])

  const sortData = (array) => {
    return array.sort((a, b) => {
      return b.helpfulness - a.helpfulness;
    })
  }

  return (
    <QnaContext.Provider value={{question, setQuestion, qnaList, setQnaList, extra, setExtra, init, setInit}}>
      <div className="qna-container">
        <h3 className="qna-title">QUESTIONS AND ANSWERS</h3>
        {/* Search Bar */}
        <Search />
        {/* Questions List */}
        {/* <QuestionsList data={data.results}/> */}
        <QuestionsList sortData={sortData}/>
        {/* See more questions button */}
        {/* Add a question button */}
      </div>
    </QnaContext.Provider >
  );
}

export default Qna;