import React, {useEffect, useState} from 'react';
import {findRelatedProducts} from './RelatedHelpers.js';
import CardCarousel from './CardCarousel.jsx';
import ProductCard from './ProductCard.jsx';

const RelatedProducts = ({current}) => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    findRelatedProducts(current.id)
        .then((items) => items.map((item, key) =>
        <ProductCard key={key} card={item.product} current={current} styles={item.styles} reviews={item.reviews} />))
        .then((newCards) => setCards(newCards))
        .catch((err) => {
          console.error(err);
          setCards([]);
        });
  }, [current.id]);

  return (
    <div className="product-list">
      <span>Related Products</span>
      <CardCarousel cards={cards} />
    </div>
  );
}

export default RelatedProducts;