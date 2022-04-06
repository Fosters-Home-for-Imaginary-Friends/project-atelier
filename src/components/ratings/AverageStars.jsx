import React, { useContext } from 'react';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai';
import {RatingsContext} from './Ratings.jsx';


let AverageStars = (props) => {
  const{averageRating} = useContext(RatingsContext)

  let avgRating = averageRating
//create an array to store stars from average rating
let numOfStars = [];

//star outlines

//push an element for each whole star in the rating
  while (numOfStars.length < 5 ) {
    if ( avgRating > 1) {
      numOfStars.push(20);
      //once below 1 total star, create values for each quarter star
    } else if ( avgRating > 0) {
      let zero = Math.abs(0 - avgRating);
      let oneQuarter = Math.abs(.25 - avgRating);
      let half = Math.abs(.5 - avgRating);
      let threeQuarters = Math.abs(.75 - avgRating);
      let max = Math.abs(1 - avgRating);
      //find the closest quarter star
      let closestPercent = Math.min(zero, oneQuarter, half, threeQuarters, max);
      // create a switch statement for each option
      switch (closestPercent) {
          case(zero):
        numOfStars.push(0);
        break;
          case(oneQuarter):
        numOfStars.push(9);
        break;
          case(half):
        numOfStars.push(11);
        break;
          case(threeQuarters):
        numOfStars.push(13);
        break;
          case(max):
        numOfStars.push(20);
        break;
          default:
        console.log('How did this happen');
        numOfStars.push(0);
        break;

      }
    } else {
      numOfStars.push(0);
    }
    avgRating = avgRating - 1
  }

  return (
    <div className="average-star-container">
      {numOfStars.map((fill, i) => <Star fill={fill} key={i} />)}
    </div>
  )

}

const Star = ({fill}) => {

  return (
    <div className="star-container">
      <div className="empty-star">☆</div>
      <div className="full-star" style={{width: fill}}>★</div>
    </div>
  );
};



export default AverageStars;