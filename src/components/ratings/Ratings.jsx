import React, { useState }from 'react';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ReviewList from './ReviewList.jsx';
//this is hardcoded data to begin working on review lists until we have api data
import tempProduct from './SeedData.js';
// import NewReview from './NewReview.jsx';
import {fetchReviews} from '../../helpers.js';

// let currentReviews = fetchReviews(40344);




//primary component that will attach to App.jsx
let Ratings = () => {

  const [reviews, setReviews] = useState(tempProduct.results)
  return (
<div className="ratings-reviews-container">
  <RatingsBreakdown />
  <ReviewList reviews= {reviews} />


</div>
  );
}

export default Ratings;