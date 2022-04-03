import React from "react";
import PropTypes from "prop-types";

const Thumbnail = ({thumbnail}) => {
  return (
    <li>
      <img src={thumbnail.thumbnail_url} className="thumbnail"/>
    </li>
  )
}

Thumbnail.propTypes = {
  thumbnail: PropTypes.object.isRequired
}

export default Thumbnail;