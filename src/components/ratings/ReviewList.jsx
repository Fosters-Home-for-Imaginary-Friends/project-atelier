//this is the component for the review list that houses individual reviews
import React, { useState, useContext } from 'react';
import IndividualReview from './IndividualReview.jsx';
import {AppContext} from '../App.jsx';
import { getReviews }  from '../../helpers.js';
import NewReview from './NewReview.jsx';
import SortDropdown from './SortDropdown.jsx';
import { RatingsContext } from './Ratings.jsx';


let ReviewList = () => {
  const { productData } = useContext(AppContext);
  const {reviews, setReviews, totalReviews, currentSort, setCurrentSort, loading, setStoredReviews, pageNum, setPageNum} = useContext(RatingsContext);
  const [showModal, setShowModal] = useState(false);
  const [moreReviews, setMoreReviews] = useState(true);


  //this function makes an api call and  grabs two more reviews from the db when the user clicks on "more reviews"
  let moreReviewsClick = () => {
    setPageNum(pageNum + 1);
    if ( pageNum < (Math.round(totalReviews / 2))) {
    getReviews(productData.id, pageNum, 2, currentSort).then(res => {
      setReviews(reviews.concat(res));
    })
  } else {
    setMoreReviews(false);
  }
  }

  //this function handles the changing of the sort dropdown and displays results based on the new selection.
  let sortChange = (sort) => {
    setPageNum(1);
    if ( sort === 'relevant') {
      getReviews(productData.id, pageNum, 2, 'relevant').then(res => {
        setReviews(res);
        setStoredReviews(res);
        setCurrentSort(sort);
      }).catch(err => {
        console.error(err);
      });
    } else if ( sort === 'helpful') {
      getReviews(productData.id, pageNum, 2, 'helpful').then(res => {
        setReviews(res);
        setStoredReviews(res);
        setCurrentSort(sort);
      }).catch(err => {
        console.error(err);
      });
    } else if ( sort === 'newest') {
      getReviews(productData.id, pageNum, 2, 'newest').then(res => {
        setReviews(res);
        setStoredReviews(res);
        setCurrentSort(sort);
      }).catch(err => {
        console.error(err);
      });
    }
  }

  const openModal = () => {
    setShowModal(true);
  }

  if ( loading ) {
    return (
      <div>
        Loading...
      </div>
    )
  }
return (
  <div className= "review-list-container">
    <div className="total-reviews-sort-dropdown-container">
      <h2 className="total-reviews">{`${totalReviews} reviews, sorted by `}</h2>
      <SortDropdown id="sort-dropdown" sortChange={sortChange} />
    </div>
    <div className="review-list-individual-review-container"> {/*this container holds all individual reviews*/}
      {reviews.map((review, i) => {
        return <IndividualReview className="individual-review" review={review} key={i}/>
      })}
      <div className="more-review-and-add-reviews">
        {(moreReviews) &&
        <button className="info-button more-reviews" onClick={moreReviewsClick}> MORE REVIEWS </button>
        }
        <button className="info-button add-review" onClick={openModal}> ADD A REVIEW + </button>
        {showModal ? <NewReview setShowModal={setShowModal}/> : null}
      </div>
    </div>
  </div>
);
}

export default ReviewList;