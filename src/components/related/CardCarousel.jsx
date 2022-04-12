import React, {useRef, useState, useEffect, useMemo, useCallback} from 'react';
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';
import {RelatedCards, OutfitCards} from './CardContainers.jsx';

  // TODO: If item is removed from outfit list, re-check rightmost position
const CardCarousel = ({related, length}) => {
  const carouselRef = useRef({});
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const cardWidth = useMemo(() => Math.ceil(carouselRef.current.clientWidth/3), [carouselRef.current.clientWidth]);
  const scrollPoint = useMemo(() => carouselRef.current.scrollLeft, [carouselRef.current.scrollLeft]);
  //These functions scroll the content within the carousel-viewport div

  const scrollLeft = useCallback(() => {
    carouselRef.current.scrollBy({
      left: -cardWidth,
      behavior: "smooth"
    });
  }, [cardWidth]);





  const scrollRight = () => {
    if (right) {
      checkArrows(carouselRef.current.scrollLeft + cardWidth);
      carouselRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth"
      });
    }
  }

  useEffect(() => {
    checkArrows(carouselRef.current.scrollLeft);
  }, [length]);

  const checkArrows = (scrollPoint) => {
    if ((scrollPoint + (cardWidth * 3)) >= cardWidth * length) {
      setRight((prev) => prev ? false : prev);
    } else {
      setRight((prev) => prev ? prev : true);
    }
  };

  return (
    <div className="carousel-container" id="modal"> {/* This holds the carousel viewport and the buttons */}
      <LeftArrow scrollLeft={scrollLeft} scrollPoint={scrollPoint} cardWidth={cardWidth} />
      <div ref={carouselRef} className="carousel-viewport"> {/* The portion of the carousel that is visible to the user */}
        {related ? <RelatedCards /> : <OutfitCards />}
      </div>
      <button onClick={scrollRight} className="arrow"><RightArrow view={right} /></button>
    </div>
  );
};

const LeftArrow = ({scrollLeft, scrollPoint, cardWidth}) => {
  const [view, setView] = useState(false);

  const handleClick = () => {
    if (view) {
      setView(() => scrollPoint - cardWidth > 0);
      scrollLeft();
    }
  };

  useEffect(() => {
    setView(() => scrollPoint > 0);
  }, [scrollPoint])

  return (
    <React.Fragment>
      <button onClick={handleClick} className="arrow">
        {view ? <AiOutlineDoubleLeft size={40} /> : null}
      </button>
    </React.Fragment>
  );
};

const RightArrow = ({view}) => {

  return (
    <React.Fragment>
      {view ? <AiOutlineDoubleRight size={40} /> : null}
    </React.Fragment>
  );
};

export default CardCarousel;
