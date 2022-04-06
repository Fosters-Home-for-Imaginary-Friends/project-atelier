import React, { useState, useEffect, createContext }from 'react';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ReviewList from './ReviewList.jsx';
import {fetchReviews, fetchReviewMetadata} from '../../helpers.js';

export const RatingsContext = createContext({});

//primary component that will attach to App.jsx
let Ratings = () => {

  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [metaRating, setMetaRating] = useState({});
  const [currentSort, setCurrentSort] = useState('relevant');
  let [totalScore, setTotalScore] = useState(0);
  let [totalReviews, setTotalReviews] = useState(0);
  let [averageRating, setAverageRating] = useState(0);
  const [starFilters, setStarFilters] = useState({one_Star_Filter: false, two_Star_Filter: false, three_Star_Filter: false, four_Star_Filter: false, five_Star_Filter: false})

  let dataFetch = () => {
    fetchReviews(40384, 1, 2, currentSort)
    .then((res) => {
      fetchReviewMetadata(40384)
      .then((meta) => {
        // setRatingsObj({reviews: res, metaRating: meta})
        setReviews(res);
        setMetaRating(meta);
        let totalRatingsObj = meta.ratings;
        //loop through all ratings and get total number of ratings and total rating score, calculate average rating.
        for (let k in totalRatingsObj) {
          setTotalScore( totalScore += (parseInt(k) * parseInt(totalRatingsObj[k])))
          setTotalReviews((totalReviews += parseInt(totalRatingsObj[k])) -2 )
          setAverageRating(totalScore / totalReviews);
      }
      }).then(() => {
        setLoading(false);
      }).catch(err => {
        console.error(err);
      })
    })
  }

  let filteredContent = (filter) => {
    if ( filter === 'five_Star_Filter') {

    }
  }

    useEffect(() => {
      dataFetch();
    }, []);


   if ( loading ) {
    return (
      <div>
        Loading. . .
      </div>
    )
  }

  return (
<RatingsContext.Provider value={{reviews, setReviews, metaRating, totalScore, totalReviews, averageRating, loading, currentSort, setCurrentSort, averageRating,
                                 starFilters, setStarFilters}}>
  <div className="ratings-reviews-container">
    <RatingsBreakdown />
    <ReviewList />
  </div>
</RatingsContext.Provider>
  );
}

export default Ratings;