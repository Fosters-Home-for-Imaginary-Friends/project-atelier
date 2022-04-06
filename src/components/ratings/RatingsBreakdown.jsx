//Component for the ratings breakdown
import React from 'react';
import AverageStars from './AverageStars.jsx';

let RatingsBreakdown = (props) => {

//having trouble with render firing before api calls, storing var to hold average rating while trying to fix
let averageStar = 3.7;



  return (
    <div className= "rating-breakdown-container">
      <h3 className= "rating-breakdown-title"> Ratings and Reviews</h3>
      <h1> {averageStar} </h1>
      <AverageStars ratingsObj= {props.metaRating.ratings}/>
    </div>
  );
};

export default RatingsBreakdown;