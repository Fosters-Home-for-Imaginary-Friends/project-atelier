import React from "react";
import PropTypes from "prop-types";

const Style = ({style}) => {
  return (
    <div>
      <img src={style.photos[0].thumbnail_url} className="style"/>
    </div>
  )
}

Style.propTypes = {
  style: PropTypes.object.isRequired
}

export default Style;