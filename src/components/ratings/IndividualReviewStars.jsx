import React from 'react';

let IndividualReviewStars = (props) => {
  let numOfStars = [];
  let rating = props.fill;

  while (numOfStars.length < 5) {
    if ( rating >= 1) {
      numOfStars.push(1)
    } else {
      numOfStars.push(0);
    }
    rating = rating -1;
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
      {(fill === 1) && <div className="full-star" style={{width: 20}}>★</div>}
    </div>
  );
  };

  export default IndividualReviewStars;