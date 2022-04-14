import React, { useContext } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { OverviewContext } from '../../Overview.jsx';

const QuantitySelector = () => {

  const { currentStyle, currentSize, quantity, setQuantity } = useContext(OverviewContext);

  const handleDecreaseClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const handleIncreaseClick = () => {
    if (quantity < currentStyle.skus[currentSize].quantity) {
      setQuantity(quantity + 1);
    }
  }

  return (
    <div className="quantity-selector-container">
      <button
        className="quantity-button decrease"
        onClick={() => handleDecreaseClick()}>
          <AiOutlineDoubleLeft />
      </button>
      <div className="quantity-count">
        { !currentSize ?
        <span className="user-data"> No size selected! </span> :
        <span className="size-text">{ quantity }</span>
        }
      </div>
      <button
        className="quantity-button increase"
        onClick={() => handleIncreaseClick()}>
          <AiOutlineDoubleRight />
      </button>
    </div>
  )
}

export default QuantitySelector;