import React from "react";
import ImageCarousel from './ImageCarousel.jsx';
import ProductInformation from './ProductInformation.jsx';

const Overview = () => {
  return (
    <div className="overview">
      <ImageCarousel />
      <ProductInformation />
    </div>
  )
}

export default Overview;