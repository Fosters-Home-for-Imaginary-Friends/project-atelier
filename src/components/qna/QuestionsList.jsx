import React, {useContext, useEffect, useState} from 'react';
import Question from './Question.jsx';
import {QnaContext} from './Qna.jsx';
import {getQuestions} from '../../helpers.js';

const QuestionsList = (props) => {
  // let init = props.data.slice(0, 4);
  const {question} = useContext(QnaContext);
  const {qnaList} = useContext(QnaContext);
  const {setQnaList} = useContext(QnaContext);
  const {extra} = useContext(QnaContext);
  const {setExtra} = useContext(QnaContext);
  const {init} = useContext(QnaContext);
  const {setInit} = useContext(QnaContext);

  // const [init, setInit]= useState(props.data);
  // let init = props.data;
  const [page, setPage] = useState(3);

  useEffect(() => {
    if (question.length > 3) {
      let newList = [];
      for (let i = 0; i < qnaList.length; i++) {
        if (qnaList[i].question_body.toLowerCase().indexOf(question.toLowerCase()) !== -1) {
          newList.push(qnaList[i])
        }
      }
      setQnaList(newList)
    } else {
      setQnaList(init);
    }
  }, [question])

  const handleMoreClick = () => {
    getQuestions(65633, page, 2)
      .then((res) => {
        // init = init.concat(res);
        console.log(res);
        setInit(init.concat(res));
        setPage(page + 1);
        if (res.length < 2) {
          setExtra(false);
        }
        setQnaList(init.concat(res));
      })
      .catch((err) => console.log(err))
  }
  return(
    <div>
      <div className="questions-list">
        {qnaList.map((product) =>
          <Question data={product} key={product.question_id}/>
        )}
      </div>
      <div className="questions-buttons">
        {extra &&
        <button
          onClick={() => {
            handleMoreClick()
          }}
        >More Answered Questions</button>}
        <button>Add a Question</button>
      </div>
    </div>
  );
}

export default QuestionsList;