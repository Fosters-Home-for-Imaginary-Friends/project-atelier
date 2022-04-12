import React, { useState } from 'react';
import AnswersList from './AnswersList.jsx';
import { AddAnswer } from './AddAnswer.jsx';
import { putQuestionHelpful, putQuestionReport } from '../../helpers.js';

const Question = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [ques_Helpfulness, setQHelpfulness] = useState(props.data.question_helpfulness);
  const [helpfulClicked, setHelpfulClick] = useState(false);
  const [reportClicked, setReportClick] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  const handleQHelpfulClick = () => {
    if (helpfulClicked) {
      alert('Questions can only be marked as helpful once')
    } else {
      putQuestionHelpful(props.data.question_id);
      setQHelpfulness(ques_Helpfulness + 1);
      setHelpfulClick(true);
    }
  }

  const handleQReportClick = () => {
    if (reportClicked) {
      alert('Question has been flagged for staff to review')
    } else {
      putQuestionReport(props.data.question_id)
      setReportClick(true);
    }
  }
  return (
    <div>
      <div className="question-head">
        <h2>{'Q: ' + props.data.question_body}</h2>
        {/* Helpful Link */}
        <span className="helpful-answer">
          Helpful? <a className="helpful" onClick={handleQHelpfulClick}>Yes</a> ({ques_Helpfulness}) |
          {' '}<a className="helpful" onClick={handleQReportClick}>{reportClicked ? 'Reported' : 'Report'}</a> |
          {' '}<a className="helpful" onClick={openModal}>Add Answer</a>
        </span>
        {showModal ? <AddAnswer setShowModal={setShowModal}/> : null}
      </div>
      {/* Question */}
      {/* Add Answer Link */}
      {/* Answer List */}
      <div>
        <AnswersList data={props.data.answers} sortData={props.sortData}/>
      </div>
      {/* More answers button */}
    </div>
  )
}

export default Question;