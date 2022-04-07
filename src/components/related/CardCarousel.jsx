import React, {useRef, useEffect, useState, useMemo} from 'react';
import {getRelated} from '../../helpers.js';
import {ProductCard, AddProductCard} from './ProductCards.jsx';
import {getCookie} from './RelatedHelpers.js';

const CardCarousel = ({product_id, related}) => {
  const carouselRef = useRef(null);

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
        {related ? <RelatedCards product_id={product_id} /> : <OutfitCards product_id={product_id} />}
      </div>
      <button onClick={scrollRight} className="arrow">Right</button>
    </div>
  );
};

const RelatedCards = React.memo(function RelatedCards({product_id}) {
  const [relatedList, setRelatedList] = useState([]);

  useEffect(() => {
    getRelated(product_id)
      .then((data) => {
        setRelatedList(data);
      })
      .catch((err) => console.error(err));
  }, [product_id]);

  return (
  <div className="carousel"> {/* The part that scrolls when you press a button */}
    {relatedList.map((id) => <ProductCard key={id} product_id={id} related={true} />)}
  </div>
  );
});

const OutfitCards = React.memo(function OutfitCards({product_id}) {
  const [outfitList, setOutfitList] = useState([]);

  useEffect(() => {
    let cookies = getCookie("outfitList");
    if (cookies !== "") {
      setOutfitList((list) => list.concat(JSON.parse(cookies)))
    }
  }, []);

  return (
    <div className="carousel"> {/* The part that scrolls when you press a button */}
      {[<AddProductCard product_id={product_id} key={"addproductcard"} setOutfitList={setOutfitList} />]
      .concat(outfitList.map((id) => <ProductCard key={id} related={false} />))}
    </div>
  );
});

export default CardCarousel;
