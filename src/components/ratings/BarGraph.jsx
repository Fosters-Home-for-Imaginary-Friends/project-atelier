import React, { useContext } from 'react';
import { RatingsContext } from './Ratings.jsx';

let BarGraph = (props) => {

  const {metaRating, totalReviews, starFilters, setStarFilters} = useContext(RatingsContext);

  //var declarations to set up % for colored bar graph portion.
  //total of all percents should equal 100
  let ratingsObj = metaRating.ratings;
  let fiveStarsPercent = (ratingsObj[5] / totalReviews);
  let fourStarsPercent = (ratingsObj[4] / totalReviews);
  let threeStrsPercent = (ratingsObj[3] / totalReviews);
  let twoStarsPercent = (ratingsObj[2] / totalReviews);
  let oneStarsPercent = (ratingsObj[1] / totalReviews);


  let filterClick = (e) => {
    // props.filterReviews(e.target.id);
    let currentFilters = starFilters;
    currentFilters[e.target.id] = (!currentFilters[e.target.id])
    setStarFilters(starFilters);
    console.log(starFilters);
  }

  return (
    <div className="bar-graph-container">
      <div className="graph-title-bar">
        <span id="five_Star_Filter" className="bar-titles" onClick={filterClick}>5 Stars</span>
        <div className="star-bar">
          <div className="bar"></div>
          <div className="scored-bar" style={{"width": `${fiveStarsPercent * 20}vw`}}></div>
        </div>
      </div>
      <div className="graph-title-bar">
        <span id="four_Star_Filter" className="bar-titles" onClick={filterClick}>4 Stars</span>
        <div className="star-bar">
          <div className="bar"></div>
          <div className="scored-bar" style={{"width": `${fourStarsPercent * 20}vw`}}></div>
        </div>
      </div>
      <div className="graph-title-bar">
        <span id="three_Star_Filter"className="bar-titles" onClick={filterClick}>3 Stars</span>
        <div className="star-bar">
          <div className="bar"></div>
          <div className="scored-bar" style={{"width": `${threeStrsPercent * 20}vw`}}></div>
        </div>
      </div>
      <div className="graph-title-bar">
        <span id="two_Star_Filter" className="bar-titles" onClick={filterClick}>2 Stars</span>
        <div className="star-bar">
          <div className="bar"></div>
          <div className="scored-bar" style={{"width": `${twoStarsPercent * 20}vw`}}></div>
        </div>
      </div>
      <div id="one-star-graph" className="graph-title-bar">
        <span id ="one_Star_Filter" className="bar-titles" onClick={filterClick}>1 Stars</span>
        <div className="star-bar">
          <div className="bar" ></div>
          <div className="scored-bar" style={{"width": `${oneStarsPercent * 20}vw`}}></div>
        </div>
      </div>

    </div>
  )
}

export default BarGraph;