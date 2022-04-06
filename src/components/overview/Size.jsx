import React, { useContext } from "react";
import PropTypes from "prop-types";
import { OverviewContext } from "./Overview.jsx";

const Size = ({sizes}) => {

  const { setCurrentSize } = useContext(OverviewContext);

  return (
    <div className="size-button" onClick={() => setCurrentSize(sizes)}>
      <span className="size-text">{sizes.size}</span>
    </div>
  )
};

Size.propTypes = {
  sizes: PropTypes.object.isRequired
}

export default Size;