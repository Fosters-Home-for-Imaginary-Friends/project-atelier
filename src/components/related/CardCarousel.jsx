import React, {useRef, useEffect, useState} from 'react';
import {ProductCard, AddProductCard} from './ProductCards.jsx';
import {getCookie} from '../../Cookies.js';
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';

const CardCarousel = ({product_id, related, list}) => {
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
        {related ? <RelatedCards list={list} /> : <OutfitCards product_id={product_id} />}
      </div>
      <button onClick={scrollRight} className="arrow"><AiOutlineDoubleRight /></button>
    </div>
  );
};

const RelatedCards = React.memo(function RelatedCards({list}) {

  return (
  <div className="carousel"> {/* The part that scrolls when you press a button */}
    {list.map((id) => <ProductCard key={id} product_id={id} related={true} />)}
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
      {[<AddProductCard key={"addproductcard"} product_id={product_id} setOutfitList={setOutfitList} />]
      .concat(outfitList.map((id) => <ProductCard key={id} product_id={id} related={false} setState={setOutfitList}  />))}
    </div>
  );
});

export default CardCarousel;
