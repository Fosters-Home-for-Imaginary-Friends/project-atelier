//this component will house the elements to build the new review modal
import React, { useRef, useState } from 'react';
import ReactDom from 'react-dom';
import { GoThumbsup, GoThumbsdown } from 'react-icons/go';

let NewReview = ({ setShowModal }) => {

  const [currStars, setCurrStars] = useState([0, 0, 0, 0, 0]);
  const [oldStars, setOldStars] = useState([0, 0, 0, 0, 0])
  const [recommendYes, setRecommendYes] = useState(false);
  const [recommendNo, setRecommendNo] = useState(false);
  const [thumbYesColor, setThumbYescolor] = useState("");
  const [thumbNoColor, setThumbNoColor] = useState();



  //close this modal when clicking outside of the modal.
  const modalRef = useRef();
  const exitModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  const Star = ({fill, value}) => {

    return (
      <div className="star-container" onMouseEnter={starsHover} onClick={starsClick} >
        <div className="empty-star"  onMouseLeave={starsOffHover} value={value} >☆</div>
        {(fill === 1) && <div className="full-star" style={{width: 20}}>★</div>}
      </div>
    );
    };

  const starsHover = (e) => {
    e.preventDefault();
    let rating = parseInt(e.target.getAttribute("value")) + 1;
    let newStars = [];
    while (newStars.length < 5) {
      if ( rating > 0) {
        rating--;
        newStars.push(1);
      } else {
        newStars.push(0);
      }
    }
    setCurrStars(newStars);
    // console.log(currStars, oldStars, 'Hello hover!')
  };

  const starsOffHover = (e) => {
    e.preventDefault();
    setCurrStars(oldStars);
  };

  const starsClick = () => {
    setOldStars(currStars);
  }

  const thumbYesClick = (e) => {

    setRecommendYes(true);
    setRecommendNo(false);
    if (recommendYes) {
      setThumbYescolor("purple");
      setThumbNoColor("");
    }
  }

  const thumbNoClick = (e) => {
    setRecommendYes(false);
    setRecommendNo(true);
    if ( recommendNo ) {
      setThumbYescolor("");
      setThumbNoColor("purple");
    }
  }

  // we need to render the modal using the new-review div in index.html
  return ReactDom.createPortal (
    <div className= "new-review-container" ref={modalRef} onClick={exitModal}>
      <div className="modal">
        <div className="new-review-title-subtitle-rating">
          <div className="new-review-title">
            <h1> Write Your Review </h1>
          </div>
          <div className="new-review-subtitle">
            <h2>About the [Product Name] </h2>
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
        </div>

        <div className="new-review-product-recommendation-container">
           <span>Do you recommend this product? </span>
           {(!recommendYes) && <GoThumbsup className="thumbs-up" style={{"color": ""}} onClick={thumbYesClick} />}
           {(recommendYes) && <GoThumbsup className="thumbs-up" style={{"color": "purple"}} onClick={thumbYesClick}/>}
           {(!recommendNo) && <GoThumbsdown className="thumbs-down" style={{"color" : ""}} onClick={thumbNoClick}/>}
           {(recommendNo) && <GoThumbsdown className="thumbs-down" style={{"color" : "purple"}} onClick={thumbNoClick}/>}
        </div>

        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("newReview")
  );
};

export default NewReview;