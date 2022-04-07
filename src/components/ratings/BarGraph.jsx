import React, { useContext } from 'react';
import { RatingsContext } from './Ratings.jsx';

let BarGraph = (props) => {


  const {metaRating, totalReviews, filteredContent} = useContext(RatingsContext);


  //var declarations to set up % for colored bar graph portion.
  //total of all percents should equal 100
  let ratingsObj = metaRating.ratings;
  let fiveStarsPercent = (ratingsObj[5] / totalReviews);
  let fourStarsPercent = (ratingsObj[4] / totalReviews);
  let threeStrsPercent = (ratingsObj[3] / totalReviews);
  let twoStarsPercent = (ratingsObj[2] / totalReviews);
  let oneStarsPercent = (ratingsObj[1] / totalReviews);


  let filterClick = (e) => {
    filteredContent(e.target.id);
  }

  let filterClick = (e) => {
    // props.filterReviews(e.target.id);
  }

  return (
    <div className="bar-graph-container">
      <div className="graph-title-bar">
        <span id="5" className="bar-titles" onClick={filterClick}>5 Stars</span>
        <div className="star-bar">
          <div className="bar"></div>
          <div className="scored-bar" style={{"width": `${fiveStarsPercent * 20}vw`}}></div>
        </div>
      </div>
      <div className="graph-title-bar">
        <span id="4" className="bar-titles" onClick={filterClick}>4 Stars</span>
        <div className="star-bar">
          <div className="bar"></div>
          <div className="scored-bar" style={{"width": `${fourStarsPercent * 20}vw`}}></div>
        </div>
      </div>
      <div className="graph-title-bar">
        <span id="3"className="bar-titles" onClick={filterClick}>3 Stars</span>
        <div className="star-bar">
          <div className="bar"></div>
          <div className="scored-bar" style={{"width": `${threeStrsPercent * 20}vw`}}></div>
        </div>
      </div>
      <div className="graph-title-bar">
        <span id="2" className="bar-titles" onClick={filterClick}>2 Stars</span>
        <div className="star-bar">
          <div className="bar"></div>
          <div className="scored-bar" style={{"width": `${twoStarsPercent * 20}vw`}}></div>
        </div>
      </div>
      <div id="one-star-graph" className="graph-title-bar">
        <span id ="1" className="bar-titles" onClick={filterClick}>1 Stars</span>
        <div className="star-bar">
          <div className="bar" ></div>
          <div className="scored-bar" style={{"width": `${oneStarsPercent * 20}vw`}}></div>
        </div>
      </div>

    </div>
  )
}

export default BarGraph;