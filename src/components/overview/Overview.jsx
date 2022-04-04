import React from "react";
import ImageCarousel from './ImageCarousel.jsx';
import ImageBar from "./ImageBar.jsx";
import ProductInformation from './ProductInformation.jsx';


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

  return (
    <div className="overview">
      {/* <div className="slogan-container">
        <section className="slogan">{product.slogan.toUpperCase()}</section>
      </div> */}
      <section className="overview-images">
        <ImageCarousel />
        <ImageBar />
      </section>
        <ProductInformation product={product}/>
    </div>
  )
}

export default Overview;