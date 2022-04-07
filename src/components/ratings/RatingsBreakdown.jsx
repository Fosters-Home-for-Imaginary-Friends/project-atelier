//Component for the ratings breakdown
import React, { useState, useContext } from 'react';
import AverageStars from './AverageStars.jsx';
import BarGraph from './BarGraph.jsx';
import Characteristics from './Characteristics.jsx';
import { RatingsContext } from './Ratings.jsx';

let RatingsBreakdown = (props) => {

  const {averageRating, metaRating, totalReviews} = useContext(RatingsContext)

  return (
    <div className= "rating-breakdown-container">
      <div className= "rating-breakdown-title">
        <h3> Ratings and Reviews</h3>
      </div>
      <div className="rating-and-stars">
      <h3> {averageRating}</h3>
      <div className="ratings-breakdown-avg-stars-container">
        <AverageStars averageRating= {averageRating}/>
      </div>
      </div>
      <div className="bar-graph-container">
        <BarGraph metaRating={metaRating} totalReviews={totalReviews}/>
      </div>
      <div className="characteristics-container">
        <Characteristics />
      </div>
    </div>
  );
};

export default RatingsBreakdown;