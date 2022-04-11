import React, {useRef} from 'react';
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';
import {RelatedCards, OutfitCards} from './CardContainers.jsx';

const CardCarousel = ({related}) => {
  const carouselRef = useRef(null);

  //These functions scroll the content within the carousel-viewport div
  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -287.61,
      behavior: "smooth"
    });
  }
  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 287.61,
      behavior: "smooth"
    });
  }

  return (
    <div className="carousel-container" id="modal"> {/* This holds the carousel viewport and the buttons */}
      <button onClick={scrollLeft} className="arrow"><AiOutlineDoubleLeft /></button>
      <div ref={carouselRef} className="carousel-viewport"> {/* The portion of the carousel that is visible to the user */}
        {related ? <RelatedCards /> : <OutfitCards />}
      </div>
      <button onClick={scrollRight} className="arrow"><AiOutlineDoubleRight /></button>
    </div>
  );
};

export default CardCarousel;
