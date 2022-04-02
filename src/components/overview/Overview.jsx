import React, { useState, useEffect } from "react";
import ImageCarousel from './ImageCarousel.jsx';
import ProductInformation from './ProductInformation.jsx';
import { fetchProducts, fetchStyles } from "../../helpers.js";


const Overview = () => {

  fetchProducts()
    .then((response) => {
      var currentProduct = response[0];
      // console.log(currentProduct);
      // setCurrentProduct(response[0]);
      // console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })

  return (
    <div className="overview">
      <ImageCarousel />
      <ProductInformation />
    </div>
  )
}

export default Overview;