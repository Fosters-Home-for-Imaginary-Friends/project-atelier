import React from "react";
import PropTypes from "prop-types";

const Size = ({sizes}) => {
  return (
    <div className="size-button">
      <span className="size-text">{sizes.size}</span>
    </div>
  )
};

Size.propTypes = {
  sizes: PropTypes.object.isRequired
}

export default Size;