import React from "react";
import PropTypes from "prop-types";
import StyleSelector from './StyleSelector.jsx';

const ProductInformation = ({ product }) => {
  return (
    <div className="overview-product-info">
      <h1>{product.name}</h1>
      <section className="body-text">{product.description}</section>
      <section className="body-text">{product.default_price} USD</section>
      <StyleSelector productId={product.id}/>
      <div>
        <button className="info-button add">ADD TO BAG</button>
      </div>
    </div>
  )
}

ProductInformation.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductInformation;