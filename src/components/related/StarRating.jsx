import React, {useMemo} from 'react';
import {getStarFill, generateKey} from './RelatedHelpers.js';
import {Star} from '../ratings/AverageStars.jsx';

const StarRating = function StarRating({averageRating}) {
  const starFill = useMemo(() => getStarFill(averageRating), [averageRating]);

  return (
    <div className="average-star-container">
      {starFill.map((fill, i) => <Star fill={fill} key={generateKey()} />)}
    </div>
  );
};

export default StarRating;