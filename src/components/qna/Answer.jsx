import React from 'react';
import moment from 'moment';

const Answer = (props) => {

  return (
    <div className='answer'>
      <div className='answer-head'>
        <h2 className="answer-heading">A: </h2>
        <section className="body-text">{props.data.body}</section>
      </div>
      {/* Date */}
      {/* Helpful Link */}
      {/* report link */}
      <div className="answer-details">
        <span className="user-data">
          {`by ${props.data.answerer_name}, ${moment(props.data.date).format('MMMM Do YYYY')} | Helpful? `}
          <a className="helpful">Yes</a> ({props.data.helpfulness})
          {' | '}<a className="helpful">Report</a>
        </span>
      </div>
    </div>
  )
}

export default Answer;