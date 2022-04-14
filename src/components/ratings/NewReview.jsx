//this component will house the elements to build the new review modal
import React, { useRef, useState, useContext } from 'react';
import ReactDom from 'react-dom';
import { RatingsContext } from './Ratings.jsx';
import { postReview } from '../../helpers.js';
import {AppContext} from '../App.jsx';
import { GoThumbsup, GoThumbsdown } from 'react-icons/go';
import PhotoUpload from './PhotoUpload.jsx';

let NewReview = ({ setShowModal }) => {

  const { productData } = useContext(AppContext);
  const {metaRating, relevantCharacteristics} = useContext(RatingsContext);

  const [currStars, setCurrStars] = useState([0, 0, 0, 0, 0]);
  const [oldStars, setOldStars] = useState([0, 0, 0, 0, 0])

  const [recommendYes, setRecommendYes] = useState(false);
  const [recommendNo, setRecommendNo] = useState(false);

  const [requiredBodyChars, setRequiredBodyChars] = useState(50);
  const [remainingBodyChars, setRemainingBodyChars] = useState(null);
  const [remainingSummaryChars, setRemainingSummaryChars] = useState(null);

  const [sizeSelector, setSizeSelector] = useState(0);
  const [sizeDescriptor, setSizeDescriptor] = useState("");
  const [sizeRelevant, setSizeRelevant] = useState(false)

  const [widthSelector, setWidthSelector] = useState(0);
  const [widthDescriptor, setWidthDescriptor] = useState("");
  const [widthRelevant, setWidthRelevant] = useState(false);

  const [comfortSelector, setComfortSelector] = useState(0);
  const [comfortDescriptor, setComfortDescriptor] =useState("");
  const [comfortRelevant, setComfortRelevant] = useState(false);

  const [qualitySelector, setQualitySelector] = useState(0);
  const [qualityDescriptor, setQualityDescriptor] = useState("");
  const [qualityRelevant, setQualityRelevant] = useState(false);

  const [lengthSelector, setLengthSelector] = useState(0);
  const [lengthDescriptor, setLengthDescriptor] =useState("");
  const [lengthRelevant, setLengthRelevant] = useState(false);


  const [fitSelector, setFitSelector] = useState(0);
  const [fitDescriptor, setFitDescriptor] = useState("");
  const [fitRelevant, setFitRelevant] = useState(false);

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

  const[validate, setValidate] = useState(false);




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
    let r = 0;
    oldStars.forEach((star) => {
      if ( star === 1) {
        r++;
      }
    })
    // if ( r < 1) {
    //   r = 1;
    // }
    setRating(r);
  }

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

  const Characteristics = () => {
    return (
      <div  className="new-review-characteristics-container">

        { (relevantCharacteristics.Size) &&
        <div onChange={sizeSelectionClick} className="new-review-characteristics-title-text">
          <section className="body-text"> Size: {sizeDescriptor}  </section>
          <section className="body-text"> </section>
          <div  className="new-review-characteristic-table" >
            <div className="radio-buttons">
              <label name="A size too small">1</label>
              <input type="radio" defaultChecked= {sizeSelector === "1"} value="1" name="A size too small"/>
              <label name="A size too small">Too Small</label>
            </div>
            <div className="radio-buttons">
              <label name="A 1/2 size too small">2</label>
            <input type="radio" defaultChecked= {sizeSelector === "2"} value="2" name="A 1/2 size too small"/>
              <label name="A 1/2 size too small"></label>
            </div>
            <div className="radio-buttons">
              <label name ="Perfect">3</label>
                <input type="radio" defaultChecked= {sizeSelector === "3"} value="3" name="Perfect"/>
              <label name ="Perfect"> Perfect </label>
            </div>
            <div className="radio-buttons">
              <label name="A 1/2 size too big">4</label>
                <input type="radio" defaultChecked= {sizeSelector === "4"} value="4" name="A 1/2 size too big"/>
              <label name="A 1/2 size too big"></label>
            </div>
            <div className="radio-buttons">
              <label name="A size too big">5</label>
                <input type="radio" defaultChecked= {sizeSelector === "5"} value="5" name="A size too big"/>
              <label name="A size too big">Too Big</label>
            </div>
          </div>
        </div>}

       { (relevantCharacteristics.Width) &&
        <div onChange={widthSelectionClick} className="new-review-characteristics-title-text">
          <section className="body-text"> Width: {widthDescriptor}  </section>
          <section className="body-text"> </section>
          <div  className="new-review-characteristic-table" >
            <div className="radio-buttons">
              <label name="Too narrow">1</label>
              <input type="radio" defaultChecked= {widthSelector === "1"} value="1" name="Too narrow"/>
              <label name="Too narrow">Too narrow</label>
            </div>
            <div className="radio-buttons">
              <label name="Slightly narrow">2</label>
            <input type="radio" defaultChecked= {widthSelector === "2"} value="2" name="Slightly narrow"/>
              <label name="Slightly narrow"></label>
            </div>
            <div className="radio-buttons">
              <label name ="Perfect">3</label>
                <input type="radio" defaultChecked= {widthSelector === "3"} value="3" name="Perfect"/>
              <label name ="Perfect"> Perfect </label>
            </div>
            <div className="radio-buttons">
              <label name="Slightly wide">4</label>
                <input type="radio" defaultChecked= {widthSelector === "4"} value="4" name="Slightly wide"/>
              <label name="Slightly wide"></label>
            </div>
            <div className="radio-buttons">
              <label name="Too wide">5</label>
                <input type="radio" defaultChecked= {widthSelector === "5"} value="5" name="Too wide"/>
              <label name="Too wide">Too wide</label>
            </div>
          </div>
        </div>}

       { (relevantCharacteristics.Comfort)&&
        <div onChange={comfortSelectionCLick} className="new-review-characteristics-title-text">
          <section className="body-text"> Comfort: {comfortDescriptor}  </section>
          <section className="body-text"> </section>
          <div  className="new-review-characteristic-table" >
            <div className="radio-buttons">
              <label name="Uncomfortable">1</label>
              <input type="radio" defaultChecked= {comfortSelector === "1"} value="1" name="Uncomfortable"/>
              <label name="Uncomfortable">Uncomfortable</label>
            </div>
            <div className="radio-buttons">
              <label name="Slightly uncomfortable">2</label>
            <input type="radio" defaultChecked= {comfortSelector === "2"} value="2" name="Slightly uncomfortable"/>
              <label name="Slightly uncomfortable"></label>
            </div>
            <div className="radio-buttons">
              <label name ="Ok">3</label>
                <input type="radio" defaultChecked= {comfortSelector === "3"} value="3" name="Ok"/>
              <label name ="Ok"> Ok </label>
            </div>
            <div className="radio-buttons">
              <label name="Comfortable">4</label>
                <input type="radio" defaultChecked= {comfortSelector === "4"} value="4" name="Comfortable"/>
              <label name="Comfortable"></label>
            </div>
            <div className="radio-buttons">
              <label name="Perfect">5</label>
                <input type="radio" defaultChecked= {comfortSelector === "5"} value="5" name="Perfect"/>
              <label name="Perfect">Perfect</label>
            </div>
          </div>
        </div>}

        {(relevantCharacteristics.Quality) &&
         <div onChange={qualitySelectionClick} className="new-review-characteristics-title-text">
          <section className="body-text"> Quality: {qualityDescriptor}  </section>
          <section className="body-text"> </section>
          <div  className="new-review-characteristic-table" >
            <div className="radio-buttons">
              <label name="Poor">1</label>
              <input type="radio" defaultChecked= {qualitySelector === "1"} value="1" name="Poor"/>
              <label name="Poor">Poor</label>
            </div>
            <div className="radio-buttons">
              <label name="Below average">2</label>
            <input type="radio" defaultChecked= {qualitySelector === "2"} value="2" name="Below average"/>
              <label name="Below average"></label>
            </div>
            <div className="radio-buttons">
              <label name ="What I expected">3</label>
                <input type="radio" defaultChecked= {qualitySelector === "3"} value="3" name="What I expected"/>
              <label name ="What I expected"> What I expected </label>
            </div>
            <div className="radio-buttons">
              <label name="Pretty great">4</label>
                <input type="radio" defaultChecked= {qualitySelector === "4"} value="4" name="Pretty great"/>
              <label name="Pretty great"></label>
            </div>
            <div className="radio-buttons">
              <label name="Perfect">5</label>
                <input type="radio" defaultChecked= {qualitySelector === "5"} value="5" name="Perfect"/>
              <label name="Perfect">Perfect</label>
            </div>
          </div>
        </div>}

        {(relevantCharacteristics.Length) &&
        <div onChange={lengthSelectionClick} className="new-review-characteristics-title-text">
          <section className="body-text"> Length: {lengthDescriptor}  </section>
          <section className="body-text"> </section>
          <div  className="new-review-characteristic-table" >
            <div className="radio-buttons">
              <label name="Runs short">1</label>
              <input type="radio" defaultChecked= {lengthSelector === "1"} value="1" name="Runs short"/>
              <label name="Runs short">Runs short</label>
            </div>
            <div className="radio-buttons">
              <label name="Runs slightly short">2</label>
            <input type="radio" defaultChecked= {lengthSelector === "2"} value="2" name="Runs slightly short"/>
              <label name="Runs slightly short"></label>
            </div>
            <div className="radio-buttons">
              <label name ="Perfect">3</label>
                <input type="radio" defaultChecked= {lengthSelector === "3"} value="3" name="Perfect"/>
              <label name ="Perfect"> Perfect</label>
            </div>
            <div className="radio-buttons">
              <label name="Runs slightly long">4</label>
                <input type="radio" defaultChecked= {lengthSelector === "4"} value="4" name="Runs slightly long"/>
              <label name="Runs slightly long"></label>
            </div>
            <div className="radio-buttons">
              <label name="Runs Long">5</label>
                <input type="radio" defaultChecked= {lengthSelector === "5"} value="5" name="Runs Long"/>
              <label name="Perfect">Runs Long</label>
            </div>
          </div>
        </div>}

        {(relevantCharacteristics.Fit) &&
        <div onChange={fitSelectionClick} className="new-review-characteristics-title-text">
          <section className="body-text"> Fit: {fitDescriptor}  </section>
          <section className="body-text"> </section>
          <div  className="new-review-characteristic-table" >
            <div className="radio-buttons">
              <label name="Runs tight">1</label>
              <input type="radio" defaultChecked= {fitSelector === "1"} value="1" name="Runs tight"/>
              <label name="Runs tight">Runs tight</label>
            </div>
            <div className="radio-buttons">
              <label name="Runs slightly tight">2</label>
            <input type="radio" defaultChecked= {fitSelector === "2"} value="2" name="Runs slightly tight"/>
              <label name="Runs slightly tight"></label>
            </div>
            <div className="radio-buttons">
              <label name ="Perfect">3</label>
                <input type="radio" defaultChecked= {fitSelector === "3"} value="3" name="Perfect"/>
              <label name ="Perfect"> Perfect</label>
            </div>
            <div className="radio-buttons">
              <label name="Runs slightly long">4</label>
                <input type="radio" defaultChecked= {fitSelector === "4"} value="4" name="Runs slightly long"/>
              <label name="Runs slightly long"></label>
            </div>
            <div className="radio-buttons">
              <label name="Runs Long">5</label>
                <input type="radio" defaultChecked= {fitSelector === "5"} value="5" name="Runs Long"/>
              <label name="Perfect">Runs Long</label>
            </div>
          </div>
        </div>}

      </div>
    )
  }

  const sizeSelectionClick = (e) => {
    setSizeSelector(e.target.value);
    setSizeDescriptor(e.target.name);
    setSize(e.target.value);

  };

  const widthSelectionClick = (e) => {
    setWidthSelector(e.target.value);
    setWidthDescriptor(e.target.name);
    setWidth(e.target.value);
  };

  const comfortSelectionCLick = (e) => {
    setComfortSelector(e.target.value);
    setComfortDescriptor(e.target.name);
    setComfort(e.target.value);
  };

  const qualitySelectionClick = (e) => {
    setQualitySelector(e.target.value);
    setQualityDescriptor(e.target.name);
    setQuality(e.target.value);
  };

  const lengthSelectionClick = (e) => {
    setLengthSelector(e.target.value);
    setLengthDescriptor(e.target.name);
    setLength(e.target.value);
  };

  const fitSelectionClick = (e) => {
    setFitSelector(e.target.value);
    setFitDescriptor(e.target.name);
    setFit(e.target.value);
  };

  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
    setRemainingSummaryChars(60 - e.target.value.length);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
    setRequiredBodyChars(50 - e.target.value.length);
    setRemainingBodyChars(1000 - e.target.value.length);

  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

   const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

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
          <Characteristics />
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