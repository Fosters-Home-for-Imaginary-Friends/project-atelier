import React, { useState, useEffect }from 'react';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ReviewList from './ReviewList.jsx';
import {fetchReviews, fetchReviewMetadata} from '../../helpers.js';






//primary component that will attach to App.jsx
let Ratings = () => {

  let totalReviews = 0;


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
  const [reviews, setReviews] = useState([]);
  const [metaRating, setMetaRating] = useState({});



  useEffect(() => {
    fetchReviewMetadata(40387).then(res => {
      setMetaRating(res);

    })
  }, [])
  return (
<div className="ratings-reviews-container">
  <RatingsBreakdown metaRating= {metaRating}/>
  <ReviewList totalReviews= {totalReviews} />


</div>
  );
}

export default Ratings;