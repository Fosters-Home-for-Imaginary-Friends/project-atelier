import React, {useRef, useState, useMemo, useCallback} from 'react';
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';

const CardCarousel = ({children, length}) => {
  const carouselRef = useRef({});
  const [position, setPosition] = useState(0);
  const cardWidth = useMemo(() => Math.ceil(carouselRef.current.clientWidth/3), [carouselRef.current.clientWidth]);
  const [clicked, setClicked] = useState(false);
  const scrollLeft = useCallback(() => {
    if (position > 0 && !clicked) {
      setClicked(true);
      carouselRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth"
      });
      setPosition((prev) => prev - 1);
      setTimeout(() => setClicked(false), 250);
    }
  });
  const scrollRight = useCallback(() => {
    if (position + 3 < length && !clicked) {
      setClicked(true);
      carouselRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth"
      });
      setPosition((prev) => prev + 1);
      setTimeout(() => setClicked(false), 250);
    }
  });

  return (
    <div className="carousel-container" id="modal">
      <div className="arrow">
        {length > 3 && position > 0 ? <LeftArrow scroll={scrollLeft} /> : null}
      </div>
      <div ref={carouselRef} className="carousel-viewport">
        <div className="carousel">
          {children}
        </div>
      </div>
      <div className="arrow">
        {length > 3 && position + 3 < length ? <RightArrow scroll={scrollRight} /> : null}
      </div>
    </div>
  );
};

const LeftArrow = ({scroll}) => {

  return (
    <React.Fragment>
      <AiOutlineDoubleLeft onClick={scroll} size={40} className="related-carousel-button left"/>
    </React.Fragment>
  );
};

const RightArrow = ({scroll}) => {

  return (
    <React.Fragment>
      <AiOutlineDoubleRight onClick={scroll} size={40} className="related-carousel-button right"/>
    </React.Fragment>
  );
};

export default CardCarousel;
