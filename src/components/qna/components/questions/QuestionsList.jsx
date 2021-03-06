import React, {useContext, useEffect, useState} from 'react';
import Question from './Question.jsx';
import { QnaContext } from '../../Qna.jsx';
import { AddQuestionModal } from './AddQuestionModal.jsx';

const QuestionsList = ({ sortData }) => {
  const {question, qnaList, setQnaList, extra, setExtra, init} = useContext(QnaContext);
  const [showModal, setShowModal] = useState(false);
  const [listSize, setListSize] = useState(4);

  // This effect triggers when the user types a value into the searchbar
  useEffect(() => {
    if (question.length > 3) {
      let newList = [];
      for (let i = 0; i < init.length; i++) {
        if (init[i].question_body.toLowerCase().indexOf(question.toLowerCase()) !== -1) {
          newList.push(init[i])
        }
      }
      setQnaList(sortData(newList))
    } else { // Anything less than 3 characters and the list reverts to its original state
      setQnaList(init.slice(0, listSize));
    }
  }, [question])

  const handleMoreClick = () => {
    if (qnaList.length !== init.length) {
      setListSize(listSize + 2);
      setQnaList(init.slice(0, listSize + 2));
    } else {
      setExtra(false);
    }
  }

  const openModal = () => {
    setShowModal(true);
  };

  return(
    <div className="questions-container">
      <div className="questions-list">
        {qnaList.map((product, index) =>
          <Question data={product} key={`${product.question_id}.${index}`} sortData={sortData}/>
        )}
      </div>
      <div className="questions-buttons">
        {extra &&
        <button className="info-button more-questions"
          onClick={() => {
            handleMoreClick()
          }}
        >MORE ANSWERED QUESTIONS</button>}
        <button onClick={openModal} className="info-button add-question">ADD A QUESTION</button>
        {showModal ? <AddQuestionModal setShowModal={setShowModal}/> : null}
      </div>
    </div>
  );
}

export default QuestionsList;