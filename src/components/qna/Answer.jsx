import React from 'react';
import moment from 'moment';

const Answer = (props) => {
  let nickname =  <span className="user-data">{props.data.answerer_name}</span>
  if (props.data.answerer_name === 'Seller') {
    nickname = <span className="user-data" style={{fontWeight: "bold"}}>{props.data.answerer_name}</span>
  }
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
        by {nickname}, {moment(props.data.date).format('MMMM Do YYYY')} | Helpful?
          {' '}<a className="helpful">Yes</a> ({props.data.helpfulness})
          {' '}| <a className="helpful">Report</a>
        </span>
      </div>
    </div>
  )
}

export default Answer;