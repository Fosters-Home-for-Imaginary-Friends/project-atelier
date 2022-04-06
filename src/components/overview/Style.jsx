import React, { useContext } from "react";
import PropTypes from "prop-types";
import { OverviewContext } from "./Overview.jsx";

const Style = ({style}) => {

  var colors = style.name.split(' & ');

  for (let i = 0; i < colors.length; i++) {
    if (colors[i].includes(' ')) {
      colors[i] = colors[i].replace(' ', '-').toLowerCase();
    } else {
      colors[i] = colors[i].toLowerCase();
    }
  }

  if (colors.length > 1) {
    var side1 = `style-color side1 ${colors[0]}`;
    var side2 = `style-color side2 ${colors[1]}`;
  } else {
    side1 = `style-color side1 ${colors[0]}`;
  }

  const { currentStyle, setCurrentStyle } = useContext(OverviewContext);

  const setCurrentStyling = () => {
    setCurrentStyle(style);
  }

  return (
    <div className={`style-button ${currentStyle === style}`} onClick={() => {setCurrentStyling()}}>
      <div className={ side1 }></div>
      <div className={ side2 }></div>
    </div>
  )
}

Style.propTypes = {
  style: PropTypes.object.isRequired
}

export default Style;