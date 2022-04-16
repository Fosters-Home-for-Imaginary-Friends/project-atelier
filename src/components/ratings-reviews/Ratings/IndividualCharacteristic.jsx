import React, { useRef, useContext } from 'react';
import { GoTriangleDown } from 'react-icons/go';
import { RatingsContext } from '../Ratings.jsx';

let IndividualCharacteristic = (props) => {

  const charRef = useRef(null);

  const { loading } = useContext(RatingsContext);

  let char = props.char;

  if (char.Fit) {
    console.log(char.Fit.value);
  }

  if (!loading) {
    console.log(charRef.current);
  }

  return (
  <div ref={charRef} className="individual-characterstic-container">
    {(char.Size) &&
    <div className="characteristic-container">
      <section className="body-text"> Size </section>
      <div className="characteristic-bars-container">
        <div className="char-bar"></div>
        <div className="char-bar"></div>
        <div className="char-bar"></div>
        <GoTriangleDown className="marker" style={{"transform" : `translate(${ char.Size.value * 4.8}vw)`}}/>
      </div>
      <div className="qualities-container">
        <span className="char-qualities helpful-answer">Too Small</span>
        <span className="char-qualities helpful-answer">Perfect</span>
        <span className="char-qualities helpful-answer">Too Big</span>
      </div>
    </div>}

    {(char.Fit) &&
    <div className="characteristic-container">
      <section className="body-text"> Fit </section>
      <div className="characteristic-bars-container">
        <div className="char-bar"></div>
        <div className="char-bar"></div>
        <div className="char-bar"></div>
        <GoTriangleDown className="marker" style={{"transform" : `translate(${ char.Fit.value * 4.8}vw)`}}/>
      </div>
      <div className="qualities-container">
        <span className="char-qualities helpful-answer">Too Tight</span>
        <span className="char-qualities helpful-answer">Perfect</span>
        <span className="char-qualities helpful-answer">Too Long</span>
      </div>
    </div>}

    {(char.Width) &&
    <div className="characteristic-container">
      <section className="body-text"> Width </section>
      <div className="characteristic-bars-container">
        <div className="char-bar"></div>
        <div className="char-bar"></div>
        <div className="char-bar"></div>
        <GoTriangleDown className="marker" style={{"transform" : `translate(${ char.Width.value * 4.8}vw)`}}/>
      </div>
      <div className="qualities-container">
        <span className="char-qualities helpful-answer">Too Narrow</span>
        <span className="char-qualities helpful-answer">Perfect</span>
        <span className="char-qualities helpful-answer">Too Wide</span>
      </div>
    </div>}

    {(char.Comfort) &&
    <div className="characteristic-container">
      <section className="body-text"> Comfort </section>
      <div className="characteristic-bars-container">
        <div className="char-bar"></div>
        <div className="char-bar"></div>
        <div className="char-bar"></div>
        <div className="marker-container">
          <div className="marker-spacer" style={{"width": `${((char.Comfort.value - 1) / 4) * 100}%`}}></div>
          <GoTriangleDown className="marker"/>
          </div>
      </div>
      <div className="qualities-container">
        <span className="char-qualities helpful-answer">Uncomfortable</span>
        <span className="char-qualities helpful-answer">Ok</span>
        <span className="char-qualities helpful-answer">Perfect</span>
      </div>
    </div>}

    {(char.Quality) &&
    <div className="characteristic-container">
      <section className="body-text"> Quality </section>
      <div className="characteristic-bars-container">
        <div className="char-bar "></div>
        <div className="char-bar"></div>
        <div className="char-bar"></div>
        <div className="marker-container">
          <div className="marker-spacer" style={{"width": `${((char.Quality.value - 1) / 4) * 100}%`}}></div>
          <GoTriangleDown className="marker"/>
        </div>
      </div>
      <div className="qualities-container">
        <span className="char-qualities helpful-answer">Poor</span>
        <span className="char-qualities helpful-answer">Ok</span>
        <span className="char-qualities helpful-answer">Perfect</span>
      </div>
    </div>}

    {(char.Length) &&
    <div className="characteristic-container">
      <section className="body-text"> Length </section>
      <div className="characteristic-bars-container">
        <div className="char-bar"></div>
        <div className="char-bar"></div>
        <div className="char-bar"></div>
        <div className="marker-container">
          <div className="marker-spacer" style={{"width": `${((char.Length.value - 1) / 4) * 100}%`}}></div>
        <GoTriangleDown className="marker"/>
        </div>
      </div>
      <div className="qualities-container">
        <span className="char-qualities helpful-answer">Too Short</span>
        <span className="char-qualities helpful-answer">Perfect</span>
        <span className="char-qualities helpful-answer">Too Long</span>
      </div>
    </div>}

  </div>
  )
}

export default IndividualCharacteristic;