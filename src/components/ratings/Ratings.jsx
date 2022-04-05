import React, { useState, useEffect }from 'react';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ReviewList from './ReviewList.jsx';
import {fetchReviews, fetchReviewMetadata} from '../../helpers.js';






//primary component that will attach to App.jsx
let Ratings = () => {


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
  <ReviewList />


</div>
  );
}

export default Ratings;