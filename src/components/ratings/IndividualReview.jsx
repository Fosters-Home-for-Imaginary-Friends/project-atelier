//this component houses the elements to create an individual review.
import React from 'react';
let moment = require('moment');

let IndividualReview = (props) => {
  //variable for individual review to clean up code
  let r = props.review;

  //returns individual review to the reviewlist.jsx
  return (
    <div className= "individual-review-container">
      <h1> This is an indiviual review </h1>
      <span>------------------------------------</span>
      <div className= "temp-container">
        <span className= "username-date"> {r.reviewer_name} {r.date} </span>
      </div>

        {/*this space is for the checkmark icon if it's a verified seller*/}

    </div>
  );
};

export default IndividualReview;