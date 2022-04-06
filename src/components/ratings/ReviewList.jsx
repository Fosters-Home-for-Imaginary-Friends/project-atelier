//this is the component for the review list that houses individual reviews
import React, {useState, useEffect, useContext } from 'react';
import IndividualReview from './IndividualReview.jsx';
import { getReviews, getReviewMetadata}  from '../../helpers.js';
import NewReview from './NewReview.jsx';
import SortDropdown from './SortDropdown.jsx';
import { RatingsContext } from './Ratings.jsx';


let ReviewList = (props) => {
  const {reviews, setReviews, totalReviews, currentSort, setCurrentSort, loading} = useContext(RatingsContext);
  const [showModal, setShowModal] = useState(false);
  const [moreReviews, setMoreReviews] = useState(true);
  let [pageNum, setPageNum] = useState(1);

  //this function makes an api call and  grabs two more reviews from the db when the user clicks on "more reviews"
  let moreReviewsClick = () => {
    setPageNum(pageNum += 1);
    if ( pageNum < (Math.round(totalReviews / 2))) {
    getReviews(40384, pageNum, 2, currentSort).then(res => {
      setReviews(reviews.concat(res));
    })
  } else {
    setMoreReviews(false);
  }
  }

  //this function handles the changing of the sort dropdown and displays results based on the new selection.
  let sortChange = (sort) => {
    console.log(sort);
    if ( sort === 'relevant') {
      getReviews(40384, 1, 2, 'relevant').then(res => {
        setReviews(res);
        setCurrentSort(sort);
      }).catch(err => {
        console.error(err);
      });
    } else if ( sort === 'helpful') {
      getReviews(40384, 1, 2, 'helpful').then(res => {
        setReviews(res);
        setCurrentSort(sort);
      }).catch(err => {
        console.error(err);
      });
    } else if ( sort === 'newest') {
      getReviews(40384, 1, 2, 'newest').then(res => {
        setReviews(res);
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
      <span>{`${totalReviews} reviews, sorted by `}</span>
      <SortDropdown id="sort-dropdown" sortChange={sortChange} />
    </div>
    <div className="review-list-individual-review-container"> {/*this container holds all individual reviews*/}
      {reviews.map((review, i) => {
        return <IndividualReview className="individual-review" review={review} key={i}/>
      })}
      <div className="more-review-and-add-reviews">
      {(moreReviews) && <div className="more-reviews-container">
       <h2 id="more-reviews-text" onClick= {moreReviewsClick}> More Reviews </h2>
      </div>}
      <div className="add-a-review-container">
        <h2 id="add-a-review-text" onClick={openModal}> Add A Review + </h2>
        {showModal ? <NewReview setShowModal={setShowModal}/> : null}
      </div>
      </div>
    </div>
  </div>
);
}

export default ReviewList;