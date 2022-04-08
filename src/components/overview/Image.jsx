import React, { useContext, useState, useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";
import { OverviewContext } from './Overview.jsx';

const Image = (props) => {

  const { slide } = props;

  const { setShowModal, currentPhoto, loading } = useContext(OverviewContext);

  const imageRef = useRef(null);

  // const [imageWidth, setImageWidth] = useState({width: 200, height: 200});

  // useLayoutEffect(() => {
  //   if (!loading) {
  //     console.log('Im here!')
  //     setImageWidth({
  //       width: imageRef.current.offsetWidth,
  //       height: imageRef.current.offsetHeight
  //     })
  //   }
  // }, [loading]);

  // const handleViewChange = (e) => {
  //   console.log(e.target.width)
  //   setImageWidth({
  //     width: 500,
  //     height: e.target.height
  //   })
  // }

  return (
    <li>
      <img src={slide.url} key={slide.image} ref={imageRef} className="image" onClick={() => setShowModal(true)}/>
    </li>
  )
}

Image.propTypes = {
  slide: PropTypes.object.isRequired
}

export default Image;