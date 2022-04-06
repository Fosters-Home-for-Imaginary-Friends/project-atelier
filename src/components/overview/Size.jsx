import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { OverviewContext } from "./Overview.jsx";

const Size = ({sizes}) => {

  const { setCurrentSize } = useContext(OverviewContext);
  const [current, setCurrent] = useState(false);

  const setCurrentSizing = () => {
    setCurrentSize(sizes);
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