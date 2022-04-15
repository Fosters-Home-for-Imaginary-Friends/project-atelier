//this component will house the elements to build the new review modal
import React, { useRef, useState, useContext } from 'react';
import ReactDom from 'react-dom';
import { RatingsContext } from '../Ratings.jsx';
import { postReview } from '../../../helpers.js';
import {AppContext} from '../../App.jsx';
import { GoThumbsup, GoThumbsdown } from 'react-icons/go';
import PhotoUpload from './PhotoUpload.jsx';
import NewReviewCharacteristic from './NewReviewCharacteristic'

let NewReview = ({ setShowModal }) => {

  const { productData } = useContext(AppContext);
  const { relevantCharacteristics } = useContext(RatingsContext);

  const [currStars, setCurrStars] = useState([0, 0, 0, 0, 0]);
  const [oldStars, setOldStars] = useState([0, 0, 0, 0, 0])
  const [recommendYes, setRecommendYes] = useState(false);
  const [recommendNo, setRecommendNo] = useState(false);
  const [requiredBodyChars, setRequiredBodyChars] = useState(50);
  const [remainingBodyChars, setRemainingBodyChars] = useState(null);
  const [remainingSummaryChars, setRemainingSummaryChars] = useState(null);

  //these vars handle the necessary requirements to create a new review object to be sent for a POST request
  const [rating, setRating] = useState(null);
  const [recommended, setRecommended] = useState(null);
  const [size, setSize] = useState(null);
  const [width, setWidth] = useState(null);
  const [comfort, setComfort] = useState(null);
  const [quality, setQuality] = useState(null);
  const [length, setLength] = useState(null);
  const [fit, setFit] = useState(null);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [photos, setPhotos] = useState([]);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  //this var handles whether or not the fields should be validated for a POST request
  const[validate, setValidate] = useState(false);

  //close this modal when clicking outside of the modal.
  const modalRef = useRef();
  const exitModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  //this component displays the stars for the user to hover/click
  const Star = ({fill, value}) => {
    return (
      <div className="star-container" onMouseEnter={starsHover} onClick={starsClick} >
        <div className="empty-star"  onMouseLeave={starsOffHover} value={value} >☆</div>
        {(fill === 1) && <div className="full-star" style={{width: 20}}>★</div>}
      </div>
    );
    };

  //these functions handle the dynamic star selection system by the user
  const starsHover = (e) => {
    e.preventDefault();
    let rating = parseInt(e.target.getAttribute("value")) + 1;
    let newStars = [];
    while (newStars.length < 5) {
      if ( rating > 0) {
          rating--;
          newStars.push(1);
      }else {
        newStars.push(0);
      }
    }
    setCurrStars(newStars);
  };
  const starsOffHover = (e) => {
    e.preventDefault();
    setCurrStars(oldStars);
  };
  const starsClick = () => {
    setOldStars(currStars);
    let r = 0;
    oldStars.forEach((star) => {
      if ( star === 1) {
        r++;
      }
    })
    setRating(r);
  }

  //these functions handle the user clicking on one of the thumb icons
  const thumbYesClick = () => {
    setRecommendYes(true);
    setRecommendNo(false);
    setRecommended(true);
  }
  const thumbNoClick = () => {
    setRecommendYes(false);
    setRecommendNo(true);
    setRecommended(false)
  };

   //these functions handle user input typing into the summary, body, nickname and email fields
  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
    setRemainingSummaryChars(60 - e.target.value.length);
  };
  const handleBodyChange = (e) => {
    setBody(e.target.value);
    //dynamically sets how many chars are needed for a valid body and how many chars are available to use
    setRequiredBodyChars(50 - e.target.value.length);
    setRemainingBodyChars(1000 - e.target.value.length);
  };
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };
   const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  //this function checks for selected characteristics, validates necessary inputs and handles the form submission for POST
  const submitClick = () => {
    let charObj = {}
    for ( let char in relevantCharacteristics) {
      if (char === "Size") {
        charObj[relevantCharacteristics[char].id]= parseInt(size);
      } else if ( char === "Width") {
        charObj[relevantCharacteristics[char].id] = parseInt(width);
      } else if ( char === "Comfort") {
        charObj[relevantCharacteristics[char].id] = parseInt(comfort);
      } else if ( char === "Quality") {
        charObj[relevantCharacteristics[char].id] = parseInt(quality);
      } else if ( char === "Length") {
        charObj[relevantCharacteristics[char].id] = parseInt(length);
      } else if ( char === "Fit") {
        charObj[relevantCharacteristics[char].id] = parseInt(fit);
      }
    }
    if ( rating > 0 && summary.length > 0 && body.length > 50 && recommended && nickname.length > 0 && email.length > 1 && Object.keys(charObj).length > 0) {

      let reviewObj = {product_id: productData.id, rating: parseInt(rating), summary: summary, body: body, recommend: recommended, name: nickname, email: email, photos: photos, characteristics: charObj};
      postReview(reviewObj).then(response => console.log(response)).catch(err => console.log(err));
      setShowModal(false);
    }
    setValidate(true);
  }
  return ReactDom.createPortal (

    <div className= "new-review-container" ref={modalRef} onClick={exitModal}>
      <div className="modal">
        <div className ="new-review-position">
        <div className="new-review-title-subtitle-rating">
          <div className="new-review-title">
            <h1> Write Your Review </h1>
          </div>
          <div className="new-review-subtitle">
            <h2>About the {productData.name} </h2>
          </div>
          <div className="new-review-overall-rating">
            <h2> Overall Rating 5.0</h2>
          </div>
          <div className="new-review-rating-text">
            <span> How would you rate this product? </span>
          </div>
          <div className="new-review-stars-container">
           {currStars.map((item, i) => {
             return <Star value={i} key={i} fill={item} />
           })}
          </div>
          {(!rating) && (validate) && <label className="invalid-text">Please select a rating for this product.</label>}
        </div>
        <div className="new-review-product-recommendation-container">
           <span>Do you recommend this product? </span>
           {(!recommendYes) && <GoThumbsup className="thumbs-up" style={{"color": ""}} onClick={thumbYesClick} />}
           {(recommendYes) && <GoThumbsup className="thumbs-up" style={{"color": "purple"}} onClick={thumbYesClick}/>}
           {(!recommendNo) && <GoThumbsdown className="thumbs-down" style={{"color" : ""}} onClick={thumbNoClick}/>}
           {(recommendNo) && <GoThumbsdown className="thumbs-down" style={{"color" : "purple"}} onClick={thumbNoClick}/>}
        </div>
        {(!recommended) && (validate) &&<label className="invalid-text">Please select a recommendation for this product.</label>}
        <div className="new-review-characteristics">
          <NewReviewCharacteristic setSize={setSize} setWidth={setWidth} setQuality={setQuality} setComfort={setComfort} setLength={setLength} setFit={setFit} />
        </div>
        <div className="new-review-summary">
          {(summary.length < 1) && (validate) && <label className="invalid-text">Please enter a valid summary</label>}
          <span className="user-data"> Review Summary: </span>
          <textarea  id="review-summary" cols="50" rows="2" placeholder="Example: Best purchase ever!" maxLength={60} wrap="wrap" onChange={handleSummaryChange}></textarea>
          <label> {remainingSummaryChars || 60} characters remaining</label>
        </div>
        <div className="new-review-body">
          {(body.length < 50) && (validate) && <label className="invalid-text">Please enter a valid review.</label>}
          <span className="user-data"> Type your review</span>
          <textarea id="review-body" className="new-review-body-text" rows="10" cols="50" maxLength={1000} wrap="wrap" onChange={handleBodyChange}></textarea>
          {requiredBodyChars > 0 && <label>Please type {(requiredBodyChars || 50)} more characters.</label>}
          {requiredBodyChars <= 0 && <label> You have met the minimum character requirement. </label>}
          <label>You have {remainingBodyChars || 1000} characters remainging.</label>
          {}
        </div>
        <PhotoUpload setPhotos={setPhotos}/>
        <div className="new-review-nickname">
          {(!nickname.length > 0) && (validate) && <label className="invalid-text"> Please enter a nickname.</label>}
          <input id="review-nickname" type="text" placeholder="Enter your nickname. Example: Jackson11..." maxLength="60" onChange={handleNicknameChange} required></input>
          <span className="helpful-answer"> For privacy reasons, do not use your full name or email address. </span>
        </div>
        <div className="new-review-email">
          {(!email) && (validate) && <label className="invalid-text">Please enter a valid email.</label>}
          <input id="review-email" type="email" placeholder="Enter your email address. Example: Jackson11@email.com" maxLength="60" onChange={handleEmailChange}></input>
          <span className="helpful-answer"> For authentication reasons, you will not be emailed. </span>
        </div>
        <div className="new-review-submit">
        <button onClick={submitClick} className="info-button submit-review"> SUBMIT REVIEW</button>
        </div>
        <button id="x-button" onClick={() => setShowModal(false)}>X</button>
        </div>
      </div>
    </div>,
    document.getElementById("newReview")
  );
};

export default NewReview;