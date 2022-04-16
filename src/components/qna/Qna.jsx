import React, { useState, createContext, useEffect, useContext } from 'react';
import QuestionsList from './components/questions/QuestionsList.jsx';
import Search from './components/questions/Search.jsx';
import {getQuestions} from '../../helpers.js';
import {AppContext} from '../App.jsx';

export const QnaContext = createContext([]);

const Qna = (props) => {
  const { productData } = useContext(AppContext);
  const [question, setQuestion] = useState('');
  const [extra, setExtra] = useState(true);

  // This state is what actually renders onto the page
  const [qnaList, setQnaList] = useState([]);

  // Keeps track of the entire set of data coming in from the api
  const [init, setInit] = useState([]);

  useEffect(() => {
    // Prevents components from rendering before we have access to the product id
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
      <div id="qna-container" className="qna-container">
        <h3 className="qna-title">QUESTIONS AND ANSWERS</h3>
        <Search />
        <QuestionsList sortData={sortData}/>
      </div>
    </QnaContext.Provider >
  );
}

export default Qna;