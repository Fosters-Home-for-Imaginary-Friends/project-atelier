//this component will house the elements to build the new review modal
import React, { useRef, useState } from 'react';
import ReactDom from 'react-dom';
import { GoThumbsup, GoThumbsdown } from 'react-icons/go';

let NewReview = ({ setShowModal }) => {

  const [currStars, setCurrStars] = useState([0, 0, 0, 0, 0]);
  const [oldStars, setOldStars] = useState([0, 0, 0, 0, 0])
  const [recommendYes, setRecommendYes] = useState(false);
  const [recommendNo, setRecommendNo] = useState(false);
  const [sizeSelector, setSizeSelector] = useState(0);
  const [sizeDescriptor, setSizeDescriptor] = useState("");




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
  };

  const starsOffHover = (e) => {
    e.preventDefault();
    setCurrStars(oldStars);
  };

  const starsClick = () => {
    setOldStars(currStars);
  }

  const thumbYesClick = () => {

    setRecommendYes(true);
    setRecommendNo(false);
  }

  const thumbNoClick = () => {
    setRecommendYes(false);
    setRecommendNo(true);
  };

  const Characteristics = () => {
    return (
      <div onChange={sizeSelectionClick} className="new-review-characteristics-container">
        <div className="new-review-characteristics-title-text">
          <section className="body-text"> Size: {sizeDescriptor}  </section>
          <section className="body-text"> </section>
          <div  className="new-review-characteristic-table" >
            <div className="radio-buttons">
            <label name="A size too small">1</label>
            <input type="radio" checked= {sizeSelector === "1"} value="1" name="A size too small"/>
            <label name="A size too small">Too Small</label>
            </div>
            <input type="radio" checked= {sizeSelector === "2"} value="2" name="A 1/2 size too small"/>
            <input type="radio" checked= {sizeSelector === "3"} value="3" name="Perfect"/> Perfect
            <input type="radio" checked= {sizeSelector === "4"} value="4" name="A 1/2 size too big"/>
            <input type="radio" checked= {sizeSelector === "5"} value="5" name="A size too big"/> Too Big
          </div>
        </div>
      </div>
    )
  }

  const sizeSelectionClick = (e) => {
    setSizeSelector(e.target.value);
    setSizeDescriptor(e.target.name);
    // if ( sizeSelector === "1") {
    //   setSizeDescriptor("A size too small")
    // } else if ( sizeSelector === "2") {
    //   setSizeDescriptor("1/2 a size too small")
    // } else if ( sizeSelector === "3") {
    //   setSizeDescriptor("Perfect")
    // } else if ( sizeSelector === "4") {
    //   setSizeDescriptor( "1/2 a size too wide")
    // } else if ( sizeSelector === "5") {
    //   setSizeDescriptor( "A size too wide")
    // }

  }


  // we need to render the modal using the new-review div in index.html
  return ReactDom.createPortal (
    <div className= "new-review-container" ref={modalRef} onClick={exitModal}>
      <div className="modal">
        <div className ="new-review-position">
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
        <div className="new-review-characteristics">
          <Characteristics />
        </div>
        <button onClick={() => setShowModal(false)}>X</button>
        </div>
      </div>
    </div>,
    document.getElementById("newReview")
  );
};

export default NewReview;