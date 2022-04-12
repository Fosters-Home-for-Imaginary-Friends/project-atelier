import React, {useRef, useState, useEffect} from 'react';
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';
import {RelatedCards, OutfitCards} from './CardContainers.jsx';

const CardCarousel = ({related, length}) => {
  const carouselRef = useRef({});

  // TODO: If item is removed from outfit list, re-check rightmost position
  const position = useRef(0);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  //These functions scroll the content within the carousel-viewport div
  // TODO: Round up scrollby
  const scrollLeft = () => {
    if (left) {
      position.current--;
      carouselRef.current.scrollBy({
        left: -(Math.ceil(carouselRef.current.clientWidth/3)),
        behavior: "smooth"
      });
      if (position.current === 0) {
        setLeft(false);
      }
      setRight((prev) => prev ? prev : true);
    }
  }

  const scrollRight = () => {
    if (right) {
      position.current++;
      carouselRef.current.scrollBy({
        left: Math.ceil(carouselRef.current.clientWidth/3),
        behavior: "smooth"
      });
      if (position.current + 3 === length) {
        setRight(false);
      }
      setLeft((prev) => prev ? prev : true);
    }
  }

  useEffect(() => {
    if (length < 4) {
      setRight((prev) => prev ? false : prev);
    } else {
      setRight((prev) => prev ? prev : true);
    }
  }, [length])

  return (
    <div className="carousel-container" id="modal"> {/* This holds the carousel viewport and the buttons */}
      <button onClick={scrollLeft} className="arrow"><LeftArrow view={left} /></button>
      <div ref={carouselRef} className="carousel-viewport"> {/* The portion of the carousel that is visible to the user */}
        {related ? <RelatedCards /> : <OutfitCards />}
      </div>
      <button onClick={scrollRight} className="arrow"><RightArrow view={right} /></button>
    </div>
  );
};

const LeftArrow = ({view}) => {

  return (
    <React.Fragment>
      {view ? <AiOutlineDoubleLeft /> : null}
    </React.Fragment>
  );
};

const RightArrow = ({view}) => {

  return (
    <React.Fragment>
      {view ? <AiOutlineDoubleRight /> : null}
    </React.Fragment>
  );
};

export default CardCarousel;
