import React, {useRef, useEffect, useState} from 'react';
import {getRelated} from '../../helpers.js';
import {ProductCard} from './ProductCards.jsx';

const CardCarousel = ({product_id, related}) => {
  const carouselRef = useRef(null);
  const idList = useRef([]);
  const [loadState, setLoadState] = useState(false);

  useEffect(() => {
    getRelated(product_id)
      .then((data) => {
        idList.current = data;
        setLoadState(true);
      })
      .catch((err) => console.error(err));
  }, [product_id]);

  //These functions scroll the content within the carousel-viewport div
  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -240,
      behavior: "smooth"
    });
  }
  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 240,
      behavior: "smooth"
    });
  }

  return (
    <div className="carousel-container" id="modal"> {/* This holds the carousel viewport and the buttons */}
      <button onClick={scrollLeft} className="arrow">Left</button>
      <div ref={carouselRef} className="carousel-viewport"> {/* The portion of the carousel that is visible to the user */}
        <div className="carousel"> {/* The part that scrolls when you press a button */}
          {idList.current.map((id) => <ProductCard key={id} product_id={id} related={related} />)}
        </div>
      </div>
      <button onClick={scrollRight} className="arrow">Right</button>
    </div>
  );
};

export default CardCarousel;
