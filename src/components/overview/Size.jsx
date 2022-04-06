import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { OverviewContext } from "./Overview.jsx";

const Size = ({sizes}) => {

  const { currentSize, setCurrentSize } = useContext(OverviewContext);
  const [current, setCurrent] = useState(false);

  const setCurrentSizing = () => {
    if (currentSize === '') {
      setCurrentSize(sizes);
    } else {
      setCurrentSize('');
    }
    setCurrent(!current);
  }

  return (
    <div className={`size-button ${current}`} onClick={() => setCurrentSizing()}>
      <span className="size-text">{sizes.size}</span>
    </div>
  )
};

Size.propTypes = {
  sizes: PropTypes.object.isRequired
}

export default Size;