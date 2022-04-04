//this component houses the elements to create an individual review.
import React from 'react';
let moment = require('moment');

let IndividualReview = (props) => {
  //variable for individual review to clean up code

  const {reviewer_name, date, summary, body, response, recommend} = props.review;

  //returns individual review to the reviewlist.jsx
  return (
    <div className= "individual-review-container">
        <div className="individual-review-element-conatainers">
          <div className="username-date-container">
            <span className= "review-username-date"> {reviewer_name} {moment(date).format('MMMM Do YYYY')} </span>
          </div>
        </div>
        <div className="individual-review-element-conatainers">
          <span className= "review-summary"> {summary}</span>
        </div>
        <div className="individual-review-element-conatainers">
          <h2 className= "review-body"> {body} </h2>
        </div>
        <div className= "review-recommend">
          {(recommend) && <span> I recommend this product. </span>}
        </div>
        <div className="review-response-container">
          {(response) && <span> {response} </span>}
        </div>
        <div className="review-helpful-container">
        <span> Helpful? </span>
          <h3 id= "review-helpful-link"> Yes </h3>
          <h3 id= "review-helpful-link"> No </h3>
          <h3 id= "review-report"> | Report </h3>
        </div>



        {/*this space is for the checkmark icon if it's a verified seller*/}

    </div>
  );
};

export default IndividualReview;