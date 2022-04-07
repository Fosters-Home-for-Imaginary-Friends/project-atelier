import React, {useMemo} from 'react';
import {getStarFill} from './RelatedHelpers.js';
import {Star} from '../ratings/AverageStars.jsx';

const StarRating = ({averageRating}) => {
  const starFill = useMemo(() => getStarFill(averageRating), [averageRating]);

  return (
    <div className="average-star-container">
      {starFill.map((fill, i) => <Star fill={fill} key={i} />)}
    </div>
  );
};

export default StarRating;