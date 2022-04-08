import React, { useRef, useContext } from "react";
import ReactDom from "react-dom";
import { OverviewContext } from "./Overview.jsx";

const ImageModal = () => {

  const imageModalRef = useRef();

  const { setShowModal, currentStyle, currentPhoto } = useContext(OverviewContext);

  return ReactDom.createPortal(
    <div className="image-modal-container" ref={imageModalRef}>
      <div className="image-modal">
        <img src={currentStyle.photos[currentPhoto].url} onClick={() => {setShowModal(false)}} className="image-modal-image"/>
      </div>
    </div>,
    document.getElementById("imageModal")
  )
}

export default ImageModal;