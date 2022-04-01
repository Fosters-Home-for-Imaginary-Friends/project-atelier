import React from "react";
import StyleSelector from './StyleSelector.jsx';

const ProductInformation = () => {

  return (
    <div className="overview-product-info">
      <h1>Expanded Product Name</h1>
      <section className="body-text">$369</section>
      <section className="body-text">STYLE</section>
      <StyleSelector />
      <div>
        <button className="info-button">SELECT SIZE</button>
        <button className="info-button">1</button>
      </div>
      <div>
        <button className="info-button">ADD TO BAG</button>
        <button className="info-button">*</button>
      </div>
    </div>
  )
}

export default ProductInformation;