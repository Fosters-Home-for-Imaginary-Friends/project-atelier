import React, {useEffect, useState} from 'react';
import {findRelatedProducts} from './relatedHelpers.js';
import ProductList from './ProductList.jsx';
import ProductCard from './ProductCard.jsx';

const RelatedProducts = ({current, product_id}) => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    findRelatedProducts(product_id)
        .then((items) => items.map((item, key) =>
        <ProductCard key={key} product={item.product} current={current} styles={item.styles} />))
        .then((newCards) => setCards(newCards))
        .catch((err) => {
          console.error(err);
          setCards([]);
        });
  }, [product_id]);



  return (
    <div className="product-list">
      <span>Related Products</span>
      <ProductList cards={cards} />
  </div>
  );
}

export default RelatedProducts;