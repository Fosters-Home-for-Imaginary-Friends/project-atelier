import React, { useContext } from "react";
import PropTypes from "prop-types";
import { OverviewContext } from "./Overview.jsx";

const Size = ({sizes, sku}) => {

  const { currentSize, setCurrentSize, setQuantity } = useContext(OverviewContext);

  const setCurrentSizing = () => {
    if (currentSize === '' || currentSize !== sku) {
      setCurrentSize(sku);
      setQuantity(1);
    } else {
      setCurrentSize('');
    }
  }

  return (
    <div className={`size-button ${currentSize === sku}`} onClick={() => setCurrentSizing()}>
      <span className="size-text">{sizes.size}</span>
    </div>
  )
};

Size.propTypes = {
  sizes: PropTypes.object.isRequired,
  sku: PropTypes.string.isRequired
}

export default Size;