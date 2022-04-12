import React, { useState, useEffect, useContext, createContext }from 'react';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import ReviewList from './ReviewList.jsx';
import {AppContext} from '../App.jsx';

import {getReviews, getReviewMetadata} from '../../helpers.js';

export const RatingsContext = createContext({});

//primary component that will attach to App.jsx
let Ratings = () => {

  const { productData } = useContext(AppContext);

  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [metaRating, setMetaRating] = useState({});
  const [relevantCharacteristics, setRelevantCharacteristics] = useState({});
  const [currentSort, setCurrentSort] = useState('relevant');
  const [storedReviews, setStoredReviews] = useState([]);
  let [totalScore, setTotalScore] = useState(0);
  let [totalReviews, setTotalReviews] = useState(0);
  let [averageRating, setAverageRating] = useState(0);
  let [pageNum, setPageNum] = useState(1);
  const [starFilters, setStarFilters] = useState({1: false, 2: false, 3: false, 4: false, 5: false});


  let dataFetch = () => {
    getReviews(productData.id, pageNum, 2, currentSort)
    .then((res) => {
      getReviewMetadata(productData.id)
      .then((meta) => {
        // setRatingsObj({reviews: res, metaRating: meta})
        setReviews(res);
        setMetaRating(meta);
        setRelevantCharacteristics(meta.characteristics)
        let totalRatingsObj = meta.ratings;

        //loop through all ratings and get total number of ratings and total rating score, calculate average rating.
        for (let k in totalRatingsObj) {
          setTotalScore( totalScore += (parseInt(k) * parseInt(totalRatingsObj[k])))
          setTotalReviews((totalReviews += parseInt(totalRatingsObj[k])) -2 )
      }
        setAverageRating((totalScore / totalReviews).toFixed(2));
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
          setReviews(filteredArray);
        } else {
          setPageNum(1);
          getReviews(productData.id, pageNum, 2, currentSort).then((res) => {setReviews(res)});
        }
      }
      }
    }
    useEffect(() => {
      dataFetch();
    }, [productData.id]);


   if ( loading ) {
    return (
      <div>
        Loading. . .
      </div>
    )
  }

  return (
<RatingsContext.Provider value={{reviews, setReviews, metaRating, totalScore, totalReviews, averageRating, loading, currentSort, setCurrentSort,
                                 starFilters, setStarFilters, filteredContent, storedReviews, setStoredReviews, pageNum, setPageNum, relevantCharacteristics}}>
  <div className="ratings-reviews-container">
    <h3 className="ratings-title">RATINGS AND REVIEWS</h3>
    <div className="breakdown-list-container">
      <RatingsBreakdown />
      <ReviewList />
    </div>
  </div>
</RatingsContext.Provider>
  );
}

export default Ratings;