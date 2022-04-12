//this component will house the elements to build the new review modal
import React, { useRef, useState, useContext } from 'react';
import ReactDom from 'react-dom';
import { RatingsContext } from './Ratings.jsx';
import { postReview } from '../../helpers.js';
import { GoThumbsup, GoThumbsdown } from 'react-icons/go';
import PhotoUpload from './PhotoUpload.jsx';

let NewReview = ({ setShowModal }) => {

  const {metaRating, relevantCharacteristics} = useContext(RatingsContext);

  const [currStars, setCurrStars] = useState([0, 0, 0, 0, 0]);
  const [oldStars, setOldStars] = useState([0, 0, 0, 0, 0])

  const [recommendYes, setRecommendYes] = useState(false);
  const [recommendNo, setRecommendNo] = useState(false);

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
    if ( r < 1) {
      r = 1;
    }
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
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

   const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const submitClick = () => {
    // let sizeID = metaRating.characteristics.Size.id || 1000
    // let widthID = metaRating.characteristics.Width.id || 1001
    // let comfortID = metaRating.characteristics.Comfort.id || 1002;
    // let qualityID = metaRating.characteristics.Quality.id || 1003
    // let lengthID = metaRating.characteristics.Length.id || 1004
    // let fitID = metaRating.characteristics.Fit.id || 1005
    let charObj = {}
    console.log(photos);

    for ( let char in relevantCharacteristics) {
      // console.log(char, char.id);
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


    /*
    He was such a great and wise potato boy. It's a shame that he had his best potatoing in front of him. But alas, he has potatoed his last potato, and have moved on to the potato boy after life. Which is actually just a rusty bucket filled with the lost hopes and dreams of other potato boys before him.

    body: "He was such a great and wise potato boy. It's a shame that he had his best potatoing in front of him. But alas, he has potatoed his last potato, and have moved on to the potato boy after life. Which is actually just a rusty bucket filled with the lost hopes and dreams of other potato boys before him."
    characteristics: {135346: '3', 135347: '3', 135348: '5', 135349: '5'}
    email: "PotatoBoyz4Lyfe@gmail.com"
    name: "PotatoBoyFan"
    photos: (3) ['http://res.cloudinary.com/diono1kwq/image/upload/v1649792915/kam3mxanfzoxwfmfa5vz.jpg', 'http://res.cloudinary.com/diono1kwq/image/upload/v1649792915/prk9gbccf24pt3tlbus0.jpg', 'http://res.cloudinary.com/diono1kwq/image/upload/v1649792914/askqzlqc0v4n6qhfvfeb.jpg']
    product_id: 40384
    rating: 4
    recommend: true
    summary: "Best Potato Boy!"*/


    // let cObj = {[sizeID] : size, [widthID]: width, [comfortID]: comfort, [qualityID]: quality, [lengthID]: length, [fitID]: fit}
    let reviewObj = {product_id: 40384, rating: parseInt(rating), summary: summary, body: body, recommend: recommended, name: nickname, email: email, photos: photos, characteristics: charObj};
    console.log(reviewObj);

    postReview(reviewObj).then(response => console.log(response)).catch(err => console.log(err));
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
        <div className="new-review-summary">
          <span className="helpful-answer"> Review Summary: </span>
          <textarea  id="review-summary" cols="50" rows="2" placeholder="Example: Best purchase ever!" maxLength={60} wrap="wrap" onChange={handleSummaryChange}></textarea>
          <label> Max 60 characters</label>
        </div>
        <div className="new-review-body">
          <span className="helpful-answer"> Type your review</span>
          <textarea id="review-body" className="new-review-body-text" rows="10" cols="50" maxLength={1000} wrap="wrap" onChange={handleBodyChange}></textarea>
          <label> Please type at least 50 more characters. You have 1000 characters remainging.</label>
        </div>

        <PhotoUpload setPhotos={setPhotos}/>
        <div className="new-review-nickname">
          <input id="review-nickname" type="text" placeholder="Enter your nickname. Example: Jackson11..." maxLength="60" onChange={handleNicknameChange}></input>
          <span className="helpful-answer"> For privacy reasons, do not use your full name or email address. </span>
        </div>
        <div className="new-review-email">
          <input id="review-email" type="text" placeholder="Enter your email address. Example: Jackson11@email.com" maxLength="60" onChange={handleEmailChange}></input>
          <span className="helpful-answer"> For authentication reasons, you will not be emailed. </span>
        </div>
        <div className="new-review-submit">
        <button onClick={submitClick} className="info-button submit-review"> SUBMIT REVIEW</button>
        </div>
        <button onClick={() => setShowModal(false)}>X</button>
        </div>
      </div>
    </div>,
    document.getElementById("newReview")
  );
};

export default NewReview;