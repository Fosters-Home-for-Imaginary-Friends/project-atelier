import React, {useEffect, useState} from 'react';
import {getRelatedProductsData, generateKey} from './RelatedHelpers.js';
import CardCarousel from './CardCarousel.jsx';
import {ProductCard} from './ProductCards.jsx';

const RelatedProducts = ({current}) => {
  const [cards, setCards] = useState([]);

  useEffect(() => { // TODO: useMemo?
    getRelatedProductsData(current.id)
        .then((items) => items.map((item, i) =>
        <ProductCard key={generateKey()} card={item} current={current} position={i} related={true} />))
        .then((newCards) => setCards(newCards))
        .catch((err) => {
          console.error(err);
          //TODO: Error catch
        });
  }, [current.id]);

  return (
    <div className="product-list" id="related-list">
      <span>Related Products</span>
      <CardCarousel cards={cards} />
    </div>
  );
}

export default RelatedProducts;