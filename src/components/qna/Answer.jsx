import React, { useState } from 'react';
import moment from 'moment';
import { putAnswerHelpful, putAnswerReport } from '../../helpers.js';

const Answer = (props) => {
  const {id, answerer_name, body, helpfulness, date} = props.data;
  const [answerHelpfulness, setAnswerHelp] = useState(helpfulness);
  const [answerHelpClicked, setHelpClicked] = useState(false);
  const [reportClicked, setReportClick] = useState(false);

  let nickname =  <span className="user-data">{answerer_name}</span>
  if (answerer_name === 'Seller') {
    nickname = <span className="user-data" style={{fontWeight: "bold"}}>{answerer_name}</span>
  }

  const handleHelpfulClick = () => {
    console.log(typeof id);
    if (answerHelpClicked) {
      alert('Answers can only be marked as helpful once')
    } else {
      putAnswerHelpful(id);
      setHelpClicked(true);
      setAnswerHelp(answerHelpfulness + 1);
    }
  }

  const handleReportClick = () => {
    if (reportClicked) {
      alert('Answer has been flagged for staff to review')
    } else {
      putAnswerReport(id);
      setReportClick(true);
    }
  }

  return (
    <div className='answer'>
      <div className='answer-head'>
        <h2 className="answer-heading">A: </h2>
        <section className="body-text">{body}</section>
      </div>
      {/* Date */}
      {/* Helpful Link */}
      {/* report link */}
      <div className="answer-details">
        <span className="user-data">
        by {nickname}, {moment(date).format('MMMM Do YYYY')} | Helpful?
          {' '}<a className="helpful" onClick={handleHelpfulClick}>Yes</a> ({answerHelpfulness})
          {' '}| <a className="helpful" onClick={handleReportClick}>{reportClicked ? 'Reported' : 'Report'}</a>
        </span>
      </div>
    </div>
  )
}

export default Answer;