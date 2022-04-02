import React from "react";
import PropTypes from "prop-types";
import StyleSelector from './StyleSelector.jsx';

const ProductInformation = ({ product }) => {
  return (
    <div className="overview-product-info">
      <h1>{product.name}</h1>
      <section className="body-text">{product.description}</section>
      <section className="body-text">{product.default_price}</section>
      <section className="body-text">STYLE</section>
      <StyleSelector productId={product.id}/>
      <div>
        <button className="info-button add">ADD TO BAG</button>
      </div>
      {/* <h1>Product Name</h1>
      <section className="body-text">Product Description</section>
      <section className="body-text">PRICE</section>
      <section className="body-text">STYLE</section>
      <StyleSelector />
      <div>
        <button className="info-button">SELECT SIZE</button>
        <button className="info-button">1</button>
      </div>
      <div>
        <button className="info-button">ADD TO BAG</button>
        <button className="info-button">*</button>
      </div> */}
    </div>
  )
}

ProductInformation.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductInformation;