import React, { useContext } from "react";
import PropTypes from "prop-types";
import { OverviewContext } from "./Overview.jsx";

const Size = ({sizes}) => {

  const { currentSize, setCurrentSize } = useContext(OverviewContext);

  const setCurrentSizing = () => {
    if (currentSize === '' || currentSize !== sizes) {
      setCurrentSize(sizes);
    } else {
      setCurrentSize('');
    }
  }

  return (
    <div className={`size-button ${currentSize === sizes}`} onClick={() => setCurrentSizing()}>
      <span className="size-text">{sizes.size}</span>
    </div>
  )
};

Size.propTypes = {
  sizes: PropTypes.object.isRequired
}

export default Size;