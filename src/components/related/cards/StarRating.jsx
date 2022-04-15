import React, {useMemo} from 'react';
import {getStarFill, generateKey} from '../utils/RelatedHelpers.js';
import {Star} from '../../ratings-reviews/Ratings/AverageStars.jsx';

const StarRating = function StarRating({averageRating}) {
  const starFill = useMemo(() => getStarFill(averageRating), [averageRating]);

  return (
    <div className="average-star-container">
      {starFill.map((fill) => <Star fill={fill} key={generateKey()} />)}
    </div>
  );
};

export default StarRating;