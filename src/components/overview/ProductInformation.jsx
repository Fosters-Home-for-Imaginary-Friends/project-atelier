import React from "react";
import PropTypes from "prop-types";
import StyleSelector from './StyleSelector.jsx';

const ProductInformation = ({ currentProduct }) => {
  console.log(currentProduct);
  return (
    <div className="overview-product-info">
      <h1>{ currentProduct.name }</h1>
      <section className="body-text">{ currentProduct.description }</section>
      <section className="body-text">{ currentProduct.default_price }</section>
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

ProductInformation.propTypes = {
  currentProduct: PropTypes.object.isRequired
}

export default ProductInformation;