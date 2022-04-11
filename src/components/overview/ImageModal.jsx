import React, { useRef, useContext, useState, useLayoutEffect, useEffect } from "react";
import ReactDom from "react-dom";
import { OverviewContext } from "./Overview.jsx";

const ImageModal = () => {

  const imageModalRef = useRef(null);
  const imageRef = useRef(null);

  const { setShowModal, currentStyle, currentPhoto, loading } = useContext(OverviewContext);
  const [top, setTop] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const [height, setHeight] = useState(0);

  const handlePosition = (e) => {
    const container = imageModalRef.current.getBoundingClientRect();
    setYPosition(e.clientY * ((height - container.height) / container.height))
  }

  if (imageModalRef.current && !height) {
    setHeight(imageModalRef.current.scrollHeight)
  }

  useLayoutEffect(() => {
    setHeight(imageRef.current.scrollHeight)
  }, [loading, setShowModal])

  useEffect(() => {
    setTop(-yPosition)
  }, [yPosition])

  const handleClick = () => {
    document.body.classList.remove('modal-open')
    setShowModal(false);
  }

  return ReactDom.createPortal(
    <div id="image-modal-container" className="image-modal-container" ref={imageModalRef}>
      <div className="image-modal">
        <img ref={imageRef}
          src={currentStyle.photos[currentPhoto].url}
          onClick={() => handleClick()} className="image-modal-image"
          onMouseMove={(e) => handlePosition(e)}
          style = {{top}}
        />
      </div>
    </div>,
    document.getElementById("imageModal")
  )
}

export default ImageModal;