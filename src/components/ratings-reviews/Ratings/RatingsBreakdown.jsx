//Component for the ratings breakdown
import React, {useContext } from 'react';
import AverageStars from './AverageStars.jsx';
import BarGraph from './BarGraph.jsx';
import Characteristics from './Characteristics.jsx';
import { RatingsContext } from '../Ratings.jsx';

let RatingsBreakdown = () => {

  const {averageRating, metaRating, totalReviews} = useContext(RatingsContext)

  return (
    <div className= "rating-breakdown-container">
      <div className="percent-recommend">
        <section className="body-text">{((parseInt(metaRating.recommended.true) / (parseInt(metaRating.recommended.true) + parseInt(metaRating.recommended.false)) * 100).toFixed(2))}% of reviews recommend this product </section>
      </div>
      <div className="rating-and-stars">
      <h1 className="average-rating"> {averageRating}</h1>
      <div className="ratings-breakdown-avg-stars-container">
        <AverageStars averageRating= {averageRating}/>
      </div>
      </div>
      <div className="bar-graph-container">
        <BarGraph metaRating={metaRating} totalReviews={totalReviews}/>
      </div>
      <div className="overall-characteristics-container">
        <Characteristics />
      </div>
    </div>
  );
};

export default RatingsBreakdown;