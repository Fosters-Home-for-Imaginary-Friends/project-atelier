//Component for the ratings breakdown
import React, { useState, useEffect } from 'react';
import AverageStars from './AverageStars.jsx';
import { fetchReviewMetadata } from '../../helpers.js';
import BarGraph from './BarGraph.jsx';

let RatingsBreakdown = (props) => {

  return (
    <div className= "rating-breakdown-container">
      <div className= "rating-breakdown-title">
        <h3> Ratings and Reviews</h3>
      </div>
      <div className="rating-and-stars">
      <h3> {props.averageRating}</h3>
      <div className="ratings-breakdown-avg-stars-container">
        <AverageStars averageRating= {props.averageRating}/>
      </div>
      </div>
      <div className="bar-graph-container">
        <BarGraph />
      </div>
    </div>
  );
};

export default RatingsBreakdown;