import React, { useRef, useState } from 'react';
import ReactDom from 'react-dom';

const ImageModal = ( {setReviewImageModalState, imgSrc} ) => {
  console.log('hello world');
  console.log(setReviewImageModalState);

    //close this modal when clicking outside of the modal.
    const reviewImageModalRef = useRef();
    const exitReviewImageModal = (e) => {
      if (e.target === reviewImageModalRef.current) {
        setReviewImageModalState(false);
      }
    };
   return ReactDom.createPortal(
  <div className="review-thumbnail-container" ref={reviewImageModalRef} onClick={exitReviewImageModal}>

  <div className="review-image-modal">
    <img src={imgSrc}></img>
  </div>
  </div>,
  document.getElementById("reviewImageModal")
   )
}

export default ImageModal;