//Component for the ratings breakdown
import React, { useState, useEffect } from 'react';
import AverageStars from './AverageStars.jsx';
import { fetchReviewMetadata } from '../../helpers.js';
import BarGraph from './BarGraph.jsx';

let RatingsBreakdown = (props) => {

  const [loading, setLoading] = useState(true);
  const [metaRatings, setMetaRatings] = useState({})

  useEffect(() => {
    fetchReviewMetadata(40384).then(res => {
      setMetaRatings(res);
      setLoading(false);
    }).catch(err => {
      console.error(err);
    })
  }, []);

//having trouble with render firing before api calls, storing var to hold average rating while trying to fix
let averageStar = 3.7;


  if ( loading ) {
    return (
      <div>
        Loading. . .
      </div>
    )
  }


  return (

    <div className= "rating-breakdown-container">
      <h3 className= "rating-breakdown-title"> Ratings and Reviews</h3>
      <div className="ratings-breakdown-avg-stars-container">
        <AverageStars ratingsObj= {props.metaRating.ratings}/>
      </div>
      <div className="bar-graph-container">
        <BarGraph />
      </div>
    </div>
  );
};

export default RatingsBreakdown;