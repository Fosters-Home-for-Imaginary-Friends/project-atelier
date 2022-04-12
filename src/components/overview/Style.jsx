import React, { useContext } from "react";
import PropTypes from "prop-types";
import { OverviewContext } from "./Overview.jsx";

const Style = ({style}) => {

  var color = style.name.split(' & ')

  for (let i = 0; i < color.length; i++) {
    if (color[i].includes(' ')) {
      color[i] = color[i].replace(' ', '-').toLowerCase();
    } else {
      color[i] = color[i].toLowerCase();
    }
  }

  color = color.join('-');

  const { currentStyle, setCurrentStyle, currentPhoto, setCurrentPhoto, setPreviousPhoto } = useContext(OverviewContext);

  const handleStyleClick = () => {
    setCurrentStyle(style)
    setPreviousPhoto(currentPhoto)
    setCurrentPhoto(0)
  }

  return (
    <div className={`style-button ${currentStyle === style}`} onClick={() => handleStyleClick(style)}>
      <div className={ `style-color ${color}` }></div>
    </div>
  )
}

Style.propTypes = {
  style: PropTypes.object.isRequired
}

export default Style;