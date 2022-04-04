//this is the component for the review list that houses individual reviews
import React from 'react';
import IndividualReview from './IndividualReview.jsx';

let ReviewList = (props) => {

return (
  <div className= "review-list-container">
    <div className="review-list-individual-review-container"> {/*this container holds all individual reviews*/}
      {props.reviews.map((review, i) => {
        return <IndividualReview className="individual-review" review={review} key={i}/>
      })}
      <div className="more-review-and-add-reviews">
      <div className="more-reviews-container">
        <h2 id="more-reviews-text"> More Reviews </h2>
      </div>
      <div className="add-a-review-container">
        <h2 id="add-a-review-text"> Add A Review + </h2>
      </div>
      </div>
    </div>
  </div>
);
}

export default ReviewList;