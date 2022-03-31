import React from "react";
import PropTypes from "prop-types";

const Image = (props) => {
  const { slide } = props;

  return (
    <img src={slide.image} key={slide.image} className="image"/>
  )
}

Image.propTypes = {
  slide: PropTypes.object.isRequired
}

export default Image;