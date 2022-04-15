//this component houses the elements to create an individual review.
import React, { useState } from 'react';
let moment = require('moment');
import { AiOutlineCheck } from 'react-icons/ai';

import { putReviewHelpful, postReview } from '../../helpers.js';
import IndividualReviewStars from './IndividualReviewStars.jsx';
import ImageModal from './ImageModal.jsx';



let IndividualReview = (props) => {
  const {review_id, rating, reviewer_name, date, summary, body, response, recommend, helpfulness, photos} = props.review;
  const [helpfulChoiceMade, setHelpfulChoiceMade] = useState(false);
  const [helpfulChoice, setHelpfulChoice] = useState('');
  const [reviewImageModalState, setReviewImageModalState] = useState(false);
  const [imgSrc, setImgSrc] = useState('');


  //if yes link is clicked for helpfulness this generates an api call to incrememnt helpfulness and displays the
  //total helpfulness number to the user
  let helpfulYesClick = () => {
    if(helpfulChoiceMade) {
      alert('You can only select helpfulness once');
    } else {
    putReviewHelpful(review_id);
    setHelpfulChoice('yes');
    setHelpfulChoiceMade(true);
    }
  }


  //if no is clicked it still displays the total helpfulness of review (there is no api for decrement)
  let helpfulNoClick = () => {
    if(helpfulChoiceMade) {
      alert('You can only select helpfulness once');
    } else {
    setHelpfulChoice('no')
    setHelpfulChoiceMade(true);
    }
  }

  let reportClick = () => {
    postReview(review_id);
    alert ('Thank you for reporting this review. Our staff has been notified.');
  }
  //this function enlarges the thumbnail images on click, if the image is clicked again it returns to original scale
  let enlargeImg = (e) => {
    if (reviewImageModalState === false) {
    e.preventDefault();
    setReviewImageModalState(true);
    setImgSrc(e.target.src);
    } else {
      setReviewImageModalState(false);
    }
  }

  //returns individual review to the reviewlist.jsx
  return (
    <div className= "individual-review-container">
        <div className="individual-review-element-containers">
          <div className="Individual-review-stars-container">
          <IndividualReviewStars fill= {rating}/>
          </div>
          <div className="username-date-container">
            <span className= "review-username-date user-data"> {reviewer_name} {moment(date).format('MMMM Do YYYY')} </span>
          </div>
        </div>
        <div className="individual-review-element-containers">
          <h2 className= "review-summary"> {summary}</h2>
        </div>
        <div className="individual-review-element-containers">
          <section className= "body-text"> {body} </section>
        </div>
        <div className="review-body-photos-container">
          {photos.map((photo, i) => { //creates a thumbnail for each photo in the reviews photo array
            return (<img className="image-thumbs" id={`img${i}`} onClick={enlargeImg} key= {i} src={photo.url} alt="new" style={{"width" : `${30}px`, "height": `${30}px`, "zIndex" : 30, "objectFit": "cover"}}/>
            )
          })}
        </div>
        {(recommend) && <div className= "review-recommend">
          <AiOutlineCheck />
          <span> I recommend this product. </span>
        </div>}
        <div className="review-response-container">
          {(response) && <section className="body-text"> {response} </section>}
        </div>
        <div className="review-helpful-container">
        <span className="helpful-answer" id="review-helpful-text"> Helpful? </span>
          {(helpfulChoice === 'yes' || helpfulChoice === '') && <span className="helpful-answer" id= "review-helpful-link" onClick={helpfulYesClick}> Yes </span>}
          {(helpfulChoice === 'no' || helpfulChoice === '') && <span className="helpful-answer" id= "review-helpful-link" onClick={helpfulNoClick}> No </span>}
          {(helpfulChoice === 'yes' || helpfulChoice === 'no') && <span className="helpful-answer" id="review-helpfulness-number">{`(${helpfulness})`}</span>}
          <span className="helpful-answer" id= "review-report" onClick={reportClick}> | Report </span>
          {reviewImageModalState ? <ImageModal imgSrc={imgSrc} setReviewImageModalState={setReviewImageModalState}/> : null}
        </div>
    </div>
  );
};

export default IndividualReview;