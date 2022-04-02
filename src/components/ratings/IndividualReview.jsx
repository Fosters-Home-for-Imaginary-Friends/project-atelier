//this component houses the elements to create an individual review.
import React from 'react';
let moment = require('moment');

let IndividualReview = (props) => {
  //variable for individual review to clean up code
  let r = props.review;

  //returns individual review to the reviewlist.jsx
  return (
    <div className= "individual-review-container">
      <div className= "temp-container">
        <span className= "review-username-date"> {r.reviewer_name} {moment(r.date).format('MMMM Do YYYY')} </span>
        <h2 className= "review-summary"> {r.summary}</h2>
        <span className= "review-body"> {r.body} </span>
        <div className= "review-recommend">
          {(r.recommend) && <span> I recommend this product. </span>}
        </div>
        <div className="review-response-container">
          {(r.response) && <span> {r.response} </span>}
        </div>
        <span> Helpful? </span>
        <span className= "review-helpful-link"> Yes </span>
        <span className= "review-helpful-link"> No </span>
        <span className= "review-report"> | Report </span>

      </div>

        {/*this space is for the checkmark icon if it's a verified seller*/}

    </div>
  );
};

export default IndividualReview;