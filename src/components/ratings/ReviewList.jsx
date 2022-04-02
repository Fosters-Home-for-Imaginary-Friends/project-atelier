//this is the component for the review list that houses individual reviews
import React from 'react';
import IndividualReview from './IndividualReview.jsx';

let ReviewList = (props) => {

return (
  <div className= "review-list-container"> {/*this container holds all individual reviews*/}
    <h3> This is where the review list begins </h3>
    {props.reviews.map((review, i) => {
      return <IndividualReview className="individual-review" review={review} key={i}/>
    })}
  </div>
);
}

export default ReviewList;