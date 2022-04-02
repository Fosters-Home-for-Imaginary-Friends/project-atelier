import React from "react";
import PropTypes from "prop-types";

const Image = (props) => {
  const { slide } = props;

  return (
    <li>
      <img src={slide.url} key={slide.image} className="image"/>
    </li>
  )
}

Image.propTypes = {
  slide: PropTypes.object.isRequired
}

export default Image;