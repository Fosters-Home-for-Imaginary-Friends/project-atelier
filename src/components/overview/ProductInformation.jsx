import React, { useContext } from "react";
import StyleSelector from './StyleSelector.jsx';
import SizeSelector from './SizeSelector.jsx';
import { OverviewContext } from "./Overview.jsx";

const ProductInformation = () => {

  const { product } = useContext(OverviewContext);

  return (
    <div className="overview-product-info">
      <h1>{product.name}</h1>
      <section className="body-text">{product.description}</section>
      <section className="body-text price">{product.default_price} USD</section>
      <StyleSelector />
      <SizeSelector />
      <div>
        <button className="info-button add">ADD TO BAG</button>
      </div>
    </div>
  )
}

export default ProductInformation;