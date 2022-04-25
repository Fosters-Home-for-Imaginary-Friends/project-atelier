import React, { useContext } from "react";
import PropTypes from "prop-types";
import { OverviewContext } from '../../context/OverviewContext.jsx';

const Style = ({ style }) => {

  const {
    currentStyle,
    setCurrentStyle,
    currentPhoto,
    setCurrentPhoto,
    setPreviousPhoto,
    setCurrentSize
  } = useContext(OverviewContext);

  var color = style.name.split(' & ');

  for (let i = 0; i < color.length; i++) {
    if (color[i].includes(' ')) {
      color[i] = color[i].replace(' ', '-').toLowerCase();
    } else {
      color[i] = color[i].toLowerCase();
    }
  }

  color = color.join('-');


  const handleStyleClick = () => {
    setCurrentStyle(style)
    setCurrentSize('')
    setPreviousPhoto(currentPhoto)
    setCurrentPhoto(0)
  }

  return (
    <div
      className={`style-button ${currentStyle === style}`}
      onClick={() => handleStyleClick(style)}>
      <div className={ `style-color ${color}` }></div>
    </div>
  )
}

Style.propTypes = {
  style: PropTypes.object.isRequired
}

export default Style;