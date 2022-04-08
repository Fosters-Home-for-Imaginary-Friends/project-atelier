import React, { useState, useEffect, createContext }from 'react';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ReviewList from './ReviewList.jsx';

import {getReviews, getReviewMetadata} from '../../helpers.js';

export const RatingsContext = createContext({});

//primary component that will attach to App.jsx
let Ratings = () => {

  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [metaRating, setMetaRating] = useState({});
  const [currentSort, setCurrentSort] = useState('relevant');
  const [storedReviews, setStoredReviews] = useState([]);
  let [totalScore, setTotalScore] = useState(0);
  let [totalReviews, setTotalReviews] = useState(0);
  let [averageRating, setAverageRating] = useState(0);
  let [pageNum, setPageNum] = useState(1);
  const [starFilters, setStarFilters] = useState({1: false, 2: false, 3: false, 4: false, 5: false});


  let dataFetch = () => {
    getReviews(40384, pageNum, 2, currentSort)
    .then((res) => {
      getReviewMetadata(40384)
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
    let filteredObj = starFilters;
    for ( let k in starFilters) {
      console.log(k, filter)
      if (k === filter) {
        filteredObj[k] = (!starFilters[k]);
        setStarFilters(filteredObj);
        if ( starFilters[k]) {
          let filteredArray = [];
          for ( let i = 0; i < reviews.length; i++) {
              if ( reviews[i].rating === parseInt(filter)) {
                filteredArray.push(reviews[i]);
              }
          }
          console.log(filteredArray)
          setReviews(filteredArray);
        } else {
          setPageNum(1);
          getReviews(40384, pageNum, 2, currentSort).then((res) => {setReviews(res)});
        }
      }
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
                                 starFilters, setStarFilters, filteredContent, storedReviews, setStoredReviews, pageNum, setPageNum}}>

  <div className="ratings-reviews-container">
    <RatingsBreakdown />
    <ReviewList />
  </div>
</RatingsContext.Provider>
  );
}

export default Ratings;