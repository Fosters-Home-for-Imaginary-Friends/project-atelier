import React, { useState, useEffect }from 'react';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ReviewList from './ReviewList.jsx';
import {fetchReviews} from '../../helpers.js';

// let currentReviews = [];
// fetchReviews(40344).then(res => {
//   currentReviews = res;
//   console.log(currentReviews);
// });
// // console.log(currentReviews);




//primary component that will attach to App.jsx
let Ratings = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(40344).then(res => {
      console.log(res);
      setReviews(res);
    });
  }, []);
  return (
<div className="ratings-reviews-container">
  <RatingsBreakdown />
  <ReviewList reviews= {reviews} />


</div>
  );
}

export default Ratings;