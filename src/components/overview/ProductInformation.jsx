import React, { useContext } from "react";
import PropTypes from "prop-types";
import StyleSelector from './StyleSelector.jsx';
import { OverviewContext } from "./Overview.jsx";

const ProductInformation = () => {

  const { product } = useContext(OverviewContext);

  return (
    <div className="overview-product-info">
      <h1>{product.name}</h1>
      <section className="body-text">{product.description}</section>
      <section className="body-text price">{product.default_price} USD</section>
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