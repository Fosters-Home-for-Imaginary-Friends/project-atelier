import React, {useState, useContext} from 'react';
import { RatingsContext } from './Ratings.jsx';

const NewReviewCharacteristic =  (props) => {

  //these variables are used to set/show text and num selection in the component
  const [sizeSelector, setSizeSelector] = useState(0);
  const [sizeDescriptor, setSizeDescriptor] = useState("");
  const [widthSelector, setWidthSelector] = useState(0);
  const [widthDescriptor, setWidthDescriptor] = useState("");
  const [comfortSelector, setComfortSelector] = useState(0);
  const [comfortDescriptor, setComfortDescriptor] =useState("");
  const [qualitySelector, setQualitySelector] = useState(0);
  const [qualityDescriptor, setQualityDescriptor] = useState("");
  const [lengthSelector, setLengthSelector] = useState(0);
  const [lengthDescriptor, setLengthDescriptor] =useState("");
  const [fitSelector, setFitSelector] = useState(0);
  const [fitDescriptor, setFitDescriptor] = useState("");

  const {relevantCharacteristics} = useContext(RatingsContext);

  //these functions set the descriptions and number choice of the user
  const sizeSelectionClick = (e) => {
    setSizeSelector(e.target.value);
    setSizeDescriptor(e.target.name);
    props.setSize(e.target.value);
  };
  const widthSelectionClick = (e) => {
    setWidthSelector(e.target.value);
    setWidthDescriptor(e.target.name);
    props.setWidth(e.target.value);
  };
  const comfortSelectionCLick = (e) => {
    setComfortSelector(e.target.value);
    setComfortDescriptor(e.target.name);
    props.setComfort(e.target.value);
  };
  const qualitySelectionClick = (e) => {
    setQualitySelector(e.target.value);
    setQualityDescriptor(e.target.name);
    props.setQuality(e.target.value);
  };
  const lengthSelectionClick = (e) => {
    setLengthSelector(e.target.value);
    setLengthDescriptor(e.target.name);
    props.setLength(e.target.value);
  };
  const fitSelectionClick = (e) => {
    setFitSelector(e.target.value);
    setFitDescriptor(e.target.name);
    props.setFit(e.target.value);
  };

  return (
    <div  className="new-review-characteristics-container">
      {/*These divs expand to show all elements to create the radio table on the new review modal */}
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

export default NewReviewCharacteristic;