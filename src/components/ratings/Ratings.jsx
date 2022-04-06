import React, { useState, useEffect }from 'react';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ReviewList from './ReviewList.jsx';
import {fetchReviews, fetchReviewMetadata} from '../../helpers.js';






//primary component that will attach to App.jsx
let Ratings = () => {

  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [metaRating, setMetaRating] = useState({});
  let [totalScore, setTotalScore] = useState(0);
  let [totalReviews, setTotalReviews] = useState(0);
  let [averageRating, setAverageRating] = useState(0);

  let rating = 0;


    //this useffect grabs the metaData ratings obj from the api and then factors the total
  //number of reviews. We use this to make sure we don't try to grab reviews past the total.
  useEffect(() => {
    fetchReviewMetadata(40384).then(res => {
      setMetaRating(res);
      let totalRatingsObj = res.ratings;
      //loop through all ratings and get total number of ratings and total rating score, calculate average rating.
      for (let k in totalRatingsObj) {
        setTotalScore( totalScore += (parseInt(k) * parseInt(totalRatingsObj[k])))
        setTotalReviews((totalReviews += parseInt(totalRatingsObj[k])) -2 );
      }
      setAverageRating(2.9);
      rating = totalScore / totalReviews;
      setLoading(false);
    }).catch(err => {
      console.error(err);
    })
  }, []);

   if ( loading ) {
    return (
      <div>
        Loading. . .
      </div>
    )
  }

  return (
<div className="ratings-reviews-container">
  <RatingsBreakdown metaRating= {metaRating} averageRating={averageRating} totalReviews={totalReviews}/>
  <ReviewList totalReviews={totalReviews} />
</div>
  );
}

export default Ratings;