//this is the component for the review list that houses individual reviews
import React from 'react';
import IndividualReview from './IndividualReview.jsx';

let ReviewList = () => {
return (
  <div className= "review-list-container"> {/*this container holds all individual reviews*/}
    <h3> This is where the review list begins </h3>
    <IndividualReview />
  </div>
);
}

export default ReviewList;