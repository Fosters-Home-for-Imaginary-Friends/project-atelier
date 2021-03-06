import React, { useRef, useContext, useState, useLayoutEffect } from "react";
import ReactDom from "react-dom";
import { OverviewContext } from "../../Overview.jsx";

const ImageModal = () => {

  const imageModalRef = useRef(null);
  const imageRef = useRef(null);

  const {
    setShowModal,
    currentStyle,
    setPreviousPhoto,
    currentPhoto,
    setCurrentPhoto,
    loading
  } = useContext(OverviewContext);

  const [top, setTop] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setHeight(imageRef.current.scrollHeight)
  }, [loading, setShowModal, currentPhoto])

  const handlePosition = (e) => {
    const container = imageModalRef.current.getBoundingClientRect();
    setTop(-(e.clientY * ((height - container.height) / container.height)));
  }

  const handleModalClick = () => {
    document.body.classList.remove('modal-open')
    setShowModal(false);
  }

  const handleLeftButtonClick = () => {
    if (currentPhoto > 0) {
      setPreviousPhoto(currentPhoto)
      setCurrentPhoto(currentPhoto - 1)
    }
  }

  const handleRightButtonClick = () => {
    if (currentPhoto < currentStyle.photos.length - 1) {
      setPreviousPhoto(currentPhoto)
      setCurrentPhoto(currentPhoto + 1)
    }
  }

  return ReactDom.createPortal(
    <div
      ref={imageModalRef}
      id="image-modal-container"
      className="image-modal-container">
      <div className="image-modal">
        <div className="modal-buttons-container">
          { currentPhoto === 0 ?
            null :
            <button
              className="modal-image left"
              onClick={() => handleLeftButtonClick()}>
            </button>
          }
          { currentPhoto === currentStyle.photos.length - 1 ?
            null :
            <button
              className="modal-image right"
              onClick={() => handleRightButtonClick()}>
            </button>
          }
        </div>
        <img
          ref={imageRef}
          src={currentStyle.photos[currentPhoto].url}
          className="image-modal-image"
          style = {{top}}
          onClick={() => handleModalClick()}
          onMouseMove={(e) => handlePosition(e)}
        />
      </div>
    </div>,
    document.getElementById("imageModal")
  )
}

export default ImageModal;