import React, {useState, useEffect} from 'react';
import ProductList from './ProductList.jsx';
import ProductCard from './ProductCard.jsx';
import CompareModal from './CompareModal.jsx';
import {fetchRelated, fetchProduct, fetchStyles} from '../../helpers.js';

const ProductLists = () => {
  //Comparison Modal Context
  const [modalView, setModalView] = useState({visibility: 'hidden', left: 0});
  const [card, setCard] = useState(0);

  const toggleModalView = () => {
    setCard((card) => card + 100);
    setModalView((oldState) => {
      return oldState.visibility === 'hidden' ? {visibility: 'visible', left: card} : {visibility: 'hidden', left: card};
    });
  };

  //Product Cards
  // TODO: Create an outfit list state
  const [relatedCards, setRelatedCards] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(40356);
  const createRelatedCards = (product_id) => { //Returns an array of Product Cards
    return fetchRelated(product_id)
      .then((data) => Promise.all(data.map((id) => fetchProduct(id) //Returns an array of objects with product and style info
            .then((product) => fetchStyles(id)
              .then((styles) => {
                return {product: product, styles: styles};
              }))
            .catch((err) => console.error(err)))))
      .then((items) => setRelatedCards(items.map((item, key) => <ProductCard key={key} selectCard={toggleModalView} product={item.product} styles={item.styles} />)))
      .catch((err) => console.error(err));
  }

  // TODO: Make sure it rerenders when the currently viewed product changes
  useEffect(() => {
    createRelatedCards(currentProduct);
  }, [currentProduct]);

  return (
    <React.Fragment>
      <div className="product-list" id="related-products">
        <CompareModal toggleModalView={toggleModalView} modalView={modalView} card={card} />
        <span>Related Products</span>
        <ProductList cards={relatedCards} />
      </div>
      <div className="product-list">
        <span>Outfit List</span>
        <ProductList cards={relatedCards} />
      </div>
    </React.Fragment>
  );
};

export default ProductLists;