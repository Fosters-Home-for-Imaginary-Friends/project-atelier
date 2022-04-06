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
  let [totalScore, setTotalScore] = useState(0);
  let [totalReviews, setTotalReviews] = useState(0);
  let [averageRating, setAverageRating] = useState(0);
  const [ratingsObj, setRatingsObj] = useState({});




  //this useffect grabs the metaData ratings obj from the api and then factors the total
  //number of reviews. We use this to make sure we don't try to grab reviews past the total.

  // let dataFetch = () => {
  //   getReviews(40384, 1, 2, currentSort)
  //   .then((res) => {
  //     setReviews(res);
  //     return;
  //   })
  //   .then(() => {
  //     console.log(reviews);
  //     getReviewMetadata(40384)
  //     .then(res => {
  //       setMetaRating(res)
  //           let totalRatingsObj = res.ratings;
  //         //loop through all ratings and get total number of ratings and total rating score, calculate average rating.
  //         for (let k in totalRatingsObj) {
  //           setTotalScore( totalScore += (parseInt(k) * parseInt(totalRatingsObj[k])))
  //           setTotalReviews((totalReviews += parseInt(totalRatingsObj[k])) -2 );
  //         }
  //         setAverageRating(totalScore / totalReviews);
  //         console.log(totalScore, totalReviews, averageRating);
  //       }).catch(err => {
  //         console.error(err);
  //       })
  //       .then(() => {
  //         setLoading(false);
  //       })
  //     })
  // }

  let dataFetch = () => {
    getReviews(40384, 1, 2, currentSort)
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

    // //this useEffect grabs our initial two reviews using the current product_id
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
<RatingsContext.Provider value={{reviews, setReviews, metaRating, totalScore, totalReviews, averageRating, loading, currentSort, setCurrentSort, averageRating}}>
  <div className="ratings-reviews-container">
    <RatingsBreakdown />
    <ReviewList />
  </div>
</RatingsContext.Provider>
  );
}

export default Ratings;