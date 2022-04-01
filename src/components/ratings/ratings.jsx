import React from 'react';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ReviewList from './ReviewList.jsx';
// import NewReview from './NewReview.jsx';

//primary component that will attach to App.jsx
let Ratings = () => {
  return (
<div className="ratings-reviews-container">
  <RatingsBreakdown />
  <ReviewList />


</div>
  );
}

export default Ratings;