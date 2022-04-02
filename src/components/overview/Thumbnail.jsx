import React from "react";

const Thumbnail = ({slide}) => {
  return (
    <li>
      <img src={slide.url} key={slide.image} className="thumbnail"/>
    </li>
  )
}

export default Thumbnail;