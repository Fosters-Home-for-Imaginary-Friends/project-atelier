import React, { useState, useEffect } from "react";
import StyleSelector from './StyleSelector.jsx';
import {fetchProducts} from "../../helpers.js";

const ProductInformation = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProducts()
      .then((response) => {
        setProduct(response[0]);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  console.log(product);

  return (
    <div className="overview-product-info">
      <h1>{product.name}</h1>
      <section className="body-text">{product.description}</section>
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