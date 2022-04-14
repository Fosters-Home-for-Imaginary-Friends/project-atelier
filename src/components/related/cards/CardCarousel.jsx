import React, {useRef, useState, useMemo, useCallback} from 'react';
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';


  // TODO: If item is removed from outfit list, re-check rightmost position
  // TODO: Lock scrolling
const CardCarousel = ({children, length}) => {
  const carouselRef = useRef({});
  const [position, setPosition] = useState(0);
  const cardWidth = useMemo(() => Math.ceil(carouselRef.current.clientWidth/3), [carouselRef.current.clientWidth]);
  const scrollLeft = useCallback(() => {
    if (position > 0) {
      carouselRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth"
      });
      setPosition((prev) => prev - 1);
    }
  });
  const scrollRight = useCallback(() => {
    if (position + 3 < length) {
      carouselRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth"
      });
      setPosition((prev) => prev + 1);
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
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      scroll();
    }
    setTimeout(() => setClicked(false), 250);
  };

  return (
    <React.Fragment>
      <AiOutlineDoubleLeft onClick={handleClick} size={40} />
    </React.Fragment>
  );
};

const RightArrow = ({scroll}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      scroll();
    }
    setTimeout(() => setClicked(false), 250);
  };

  return (
    <React.Fragment>
      <AiOutlineDoubleRight onClick={handleClick} size={40} />
    </React.Fragment>
  );
};

export default CardCarousel;
