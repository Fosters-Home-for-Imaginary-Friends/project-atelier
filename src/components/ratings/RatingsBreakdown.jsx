//Component for the ratings breakdown
import React from 'react';
import AverageStars from './AverageStars.jsx';

let RatingsBreakdown = (props) => {
console.log(props.metaRating);

//having trouble with render firing before api calls, storing var to hold average rating while trying to fix
let averageStar = 3.7;

//function to calculate the average rating for the product based on total ratings
let averageRating = (ratingObj) => {
  console.log(ratingObj);
  let totalVotes = 0;
  let totalScore = 0;
  for ( let k in ratingObj) {
    totalVotes += ratingObj[k];
    totalScore += (ratingObj[k] * parseInt(k));
    return (totalScore / totalVotes);
  }
}

  return (
    <div className= "rating-breakdown-container">
      <h3 className= "rating-breakdown-title"> Ratings and Reviews</h3>
      <h1> {averageStar} </h1>
      <AverageStars ratingsObj= {props.metaRating.ratings}/>
    </div>
  );
};

export default RatingsBreakdown;