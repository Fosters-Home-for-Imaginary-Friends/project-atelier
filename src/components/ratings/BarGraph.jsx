import React from 'react';

let BarGraph = (props) => {

  //var declarations to set up % for colored bar graph portion.
  //total of all percents should equal 100
  let ratingsObj = props.metaRating.ratings;
  let totalReviews = props.totalReviews;
  let fiveStarsPercent = (ratingsObj[5] / totalReviews);
  let fourStarsPercent = (ratingsObj[4] / totalReviews);
  let threeStrsPercent = (ratingsObj[3] / totalReviews);
  let twoStarsPercent = (ratingsObj[2] / totalReviews);
  let oneStarsPercent = (ratingsObj[1] / totalReviews);


  let filterClick = () => {

  }

  return (
    <div className="bar-graph-container">
      <div className="graph-title-bar">
        <span id="five-star-title" className="bar-titles">5 Stars</span>
        <div className="star-bar">
          <div className="bar"></div>
          <div className="scored-bar" style={{"width": `${fiveStarsPercent * 20}vw`}}></div>
        </div>
      </div>
      <div className="graph-title-bar">
        <span id="four-star-title" className="bar-titles">4 Stars</span>
        <div className="star-bar">
          <div className="bar"></div>
          <div className="scored-bar" style={{"width": `${fourStarsPercent * 20}vw`}}></div>
        </div>
      </div>
      <div className="graph-title-bar">
        <span id="three-star-title"className="bar-titles">3 Stars</span>
        <div className="star-bar">
          <div className="bar"></div>
          <div className="scored-bar" style={{"width": `${threeStrsPercent * 20}vw`}}></div>
        </div>
      </div>
      <div className="graph-title-bar">
        <span id="two-star-title" className="bar-titles">2 Stars</span>
        <div className="star-bar">
          <div className="bar"></div>
          <div className="scored-bar" style={{"width": `${twoStarsPercent * 20}vw`}}></div>
        </div>
      </div>
      <div id="one-star-graph" className="graph-title-bar">
        <span id ="one-star-title" className="bar-titles">1 Stars</span>
        <div className="star-bar">
          <div className="bar" ></div>
          <div className="scored-bar" style={{"width": `${oneStarsPercent * 20}vw`}}></div>
        </div>
      </div>

    </div>
  )
}

export default BarGraph;