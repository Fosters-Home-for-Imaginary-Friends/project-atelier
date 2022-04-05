//this component houses the elements to create an individual review.
import React, {useState} from 'react';
let moment = require('moment');
import {AiOutlineCheck} from 'react-icons/ai';
import {putReviewHelpful} from '../../helpers.js';

let IndividualReview = (props) => {
  //variable for individual review to clean up code

  const {reviewer_name, date, summary, body, response, recommend, helpfulness, photos} = props.review;
  const [product, setProduct] = useState(40384)
  const [helpfulChoiceMade, setHelpfulChoiceMade] = useState(false);
  const [helpfulChoice, setHelpfulChoice] = useState('')

  let helpfulYesClick = () => {
    if(helpfulChoiceMade) {
      alert('You can only select helpfulness once');
    } else {
    putReviewHelpful(product);
    setHelpfulChoice('yes');
    setHelpfulChoiceMade(true);
    }
  }

  let helpfulNoClick = () => {

  }


  //returns individual review to the reviewlist.jsx
  return (
    <div className= "individual-review-container">
        <div className="individual-review-element-conatainers">
          <div className="username-date-container">
            <span className= "review-username-date"> {reviewer_name} {moment(date).format('MMMM Do YYYY')} </span>
          </div>
        </div>
        <div className="individual-review-element-conatainers">
          <span className= "review-summary"> {summary}</span>
        </div>
        <div className="individual-review-element-conatainers">
          <h2 className= "review-body"> {body} </h2>
        </div>
        <div className="review-body-photos-container">

          {photos.map((photo, i) => {
            return (<img key= {i} src={photo.url} alt="new" style={{"width" : `${30}px`, "height": `${30}px`}}/>)
          })}
        </div>
        {(recommend) && <div className= "review-recommend">
          <AiOutlineCheck />
          <span> I recommend this product. </span>
        </div>}
        <div className="review-response-container">
          {(response) && <span> {response} </span>}
        </div>
        <div className="review-helpful-container">
        <h3 id="review-helpful-text"> Helpful? </h3>
          {(helpfulChoice === 'yes' || helpfulChoice === '') && <h3 id= "review-helpful-link" onClick={helpfulYesClick}> Yes </h3>}
          {(helpfulChoice === 'no' || helpfulChoice === '') && <h3 id= "review-helpful-link"> No </h3>}
          <h3 id= "review-report"> | Report </h3>
        </div>



        {/*this space is for the checkmark icon if it's a verified seller*/}

    </div>
  );
};

export default IndividualReview;