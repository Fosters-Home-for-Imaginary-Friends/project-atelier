import React from "react";
import Style from "./Style.jsx";

const StyleSelector = ({ productId }) => {
  console.log(productId);
  return (
    <div className="style-selector">
      <Style />
      <Style />
      <Style />
      <Style />
      <Style />
      <Style />
      <Style />
      <Style />
    </div>
  )
}

export default StyleSelector;