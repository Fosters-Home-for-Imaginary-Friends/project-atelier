//this is the component for the review list that houses individual reviews
import React, {useState, useEffect} from 'react';
import IndividualReview from './IndividualReview.jsx';
import {fetchReviews, fetchReviewMetadata} from '../../helpers.js';
import NewReview from './NewReview.jsx';

let ReviewList = (props) => {
  // let currentReviews = props.reviews;

  const [showModal, setShowModal] = useState(false);
  const [moreReviews, setMoreReviews] = useState(true);
  const [reviews, setReviews] = useState([]);
  let [pageNum, setPageNum] = useState(1)

  let totalReviews = 0;

  //this function makes an api call and  grabs two more reviews from the db when the user clicks on "more reviews"
  let moreReviewsClick = () => {
    setPageNum(pageNum += 1);
    console.log(Math.round(totalReviews / 2));
    if ( pageNum < (Math.round(totalReviews / 2))) {
    fetchReviews(40387, pageNum).then(res => {
      console.log(pageNum, res, moreReviews)
      setReviews(reviews.concat(res));
    })
  } else {
    setMoreReviews(false);
  }
  }

  //this useEffect grabs our initial two reviews using the current product_id
  useEffect(() => {
    fetchReviews(40387).then(res => {
      console.log(res);
      setReviews(res);
    }).catch(err => {
      console.error(err);
    });
  }, []);

  useEffect(() => {
    fetchReviewMetadata(40387).then(res => {
      let totalRatingsObj = res.ratings;
      for (let k in totalRatingsObj) {
        totalReviews += parseInt(totalRatingsObj[k]);
      }
      totalReviews -= 2;
    }).catch(err => {
      console.error(err);
    })
  }, []);

  const openModal = () => {
    setShowModal(true);
  }

return (
  <div className= "review-list-container">
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