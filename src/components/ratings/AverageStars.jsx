import React from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import starOutline from '../../../public/assets/starOutline.png';
let AverageStars = (props) => {

//temp variable to progress while api call having issues with timing
let averageRating = 3.7;

//create an array to store stars from average rating
let numOfStars = [];
//push an element for each whole star in the rating
while (numOfStars.length < 5 ) {
  if ( averageRating > 1) {
    numOfStars.push(1);
    //once below 1 total star, create values for each quarter star
  } else if ( averageRating > 0) {
    let zero = Math.abs(0 - averageRating);
    let oneQuarter = Math.abs(.25 - averageRating);
    let half = Math.abs(.5 - averageRating);
    let threeQuarters = Math.abs(.75 - averageRating);
    let max = Math.abs(1 - averageRating);
    //find the closest quarter star
    let closestPercent = Math.min(zero, oneQuarter, half, threeQuarters, max);
    // create a switch statement for each option
    switch (closestPercent) {
        case(zero):
      numOfStars.push(0);
      break;
        case(oneQuarter):
      numOfStars.push(.25);
      break;
        case(half):
      numOfStars.push(.5);
      break;
        case(threeQuarters):
      numOfStars.push(.75);
      break;
        case(max):
      numOfStars.push(1);
      break;
        default:
      console.log('How did this happen');
      numOfStars.push(0);
      break;

    }
  } else {
    numOfStars.push(0);
  }
  averageRating = averageRating - 1
}

  return (
    <div>
      {numOfStars.map((star, i) => {
        return (
          <div className="single-star-container" key={i}>
            <div className="single-star-fill" style={{"width" : `${parseInt(star * 31)}px`}}>
              {/* <AiOutlineStar className="single-star-outline"/> */}
              <img className="single-star-outline" src={starOutline} alt="stars alt"></img>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default AverageStars;