import React, {useState, useEffect, useMemo} from 'react';
import CompareModal from './CompareModal.jsx';
import {findRelatedProducts} from './relatedHelpers.js';
import ProductList from './ProductList.jsx';
import ProductCard from './ProductCard.jsx';

const RelatedProducts = ({current, toggleModal}) => {

  const createProductCards = (product_id) => {
    return findRelatedProducts(product_id)
      .then((items) => items.map((item, key) =>
      <ProductCard key={key} selectCard={toggleModal} product={item.product} styles={item.styles} />));
  };

  //Returns a memoized list of relatedCards unless the currently view product changes
  const relatedCards = useMemo(() => {
    console.log("memo");
    return createProductCards(current);
  }, [current]);

  return (
    <div className="product-list" id="related-products">
      <CompareModal toggleModal={toggleModal} modalView={modalView} features={features} />
      <span>Related Products</span>
      <ProductList cards={relatedCards} />
  </div>
  );
}

export {RelatedProducts};