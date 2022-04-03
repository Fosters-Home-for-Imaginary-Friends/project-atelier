import React from "react";
import PropTypes from "prop-types";

const Style = ({style}) => {
  console.log(style);
  var colors = style.name.split(' & ');

  for (let i = 0; i < colors.length; i++) {
    if (colors[i].includes(' ')) {
      colors[i] = colors[i].replace(' ', '-').toLowerCase();
    } else {
      colors[i] = colors[i].toLowerCase();
    }
  }
  console.log(colors);
  var side1 = `style-color side1 ${colors[0]}`;
  var side2 = `style-color side2 ${colors[1]}`;
  console.log(side1);
  return (
    <div className="style-buttons">
      {/* <img src={style.photos[0].thumbnail_url} className="style"/>
      <button className="style-button"></button> */}
      <div className={ side1 }></div>
      <div className={ side2 }></div>
    </div>
  )
}

Style.propTypes = {
  style: PropTypes.object.isRequired
}

export default Style;