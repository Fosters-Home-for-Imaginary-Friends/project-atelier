import React, { useState, useEffect } from "react";
import ImageCarousel from './ImageCarousel.jsx';
import ProductInformation from './ProductInformation.jsx';
// import { fetchProducts, fetchStyles } from "../../helpers.js";


const Overview = () => {

  var product = {
    id: 40344,
    campus: "hr-rfp",
    name: "Camo Onesie",
    slogan: "Blend in to your crowd",
    description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    category: "Jackets",
    default_price: "140.00",
    created_at: "2021-08-13T14:38:44.509Z",
    updated_at: "2021-08-13T14:38:44.509Z"
  };

  // fetchProducts()
  //   .then((response) => {
  //     var currentProduct = response[0];
  //     // console.log(currentProduct);
  //     // setCurrentProduct(response[0]);
  //     // console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })

  return (
    <div className="overview">
      <ImageCarousel />
      <ProductInformation product={product}/>
    </div>
  )
}

export default Overview;