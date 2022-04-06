import React, {useContext, useEffect} from 'react';
import Question from './Question.jsx';
import {QnaContext} from './Qna.jsx';

const QuestionsList = (props) => {
  // let init = props.data.slice(0, 4);
  const {question} = useContext(QnaContext);
  const {qnaList} = useContext(QnaContext);
  const {setList} = useContext(QnaContext);

  useEffect(() => {
    if (question.length > 3) {
      console.log(question.length);
      let newList = [];
      for (let i = 0; i < qnaList.length; i++) {
        if (qnaList[i].question_body.toLowerCase().indexOf(question.toLowerCase()) !== -1) {
          newList.push(qnaList[i])
        }
      }
      setList(newList)
    } else {
      setList(props.data.results);
    }
  }, [question])

  return(
    <div>
      <div className="questions-list">
        {qnaList.map((product) =>
          <Question data={product} key={product.question_id}/>
        )}
      </div>
      <div>
        <span className="helpful-answer">
          Helpful?
          <a>Yes</a>
          ()
        </span>
      </div>
      <div className="questions-buttons">
        <button>More Answered Questions</button>
        <button>Add a Question</button>
      </div>
    </div>
  );
}

export default QuestionsList;