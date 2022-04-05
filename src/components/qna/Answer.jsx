import React from 'react';

const Answer = (props) => {
  return (
    <div className='answer'>
      <h2 className='answer-heading'>A: </h2>
      <section className="body-text">{props.data.body}</section>
      {/* Date */}
      {/* Helpful Link */}
      {/* report link */}
    </div>
  )
}

export default Answer;