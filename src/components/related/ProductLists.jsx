import React, {useState, useEffect} from 'react';
import ProductList from './ProductList.jsx';
import ProductCard from './ProductCard.jsx';
import CompareModal from './CompareModal.jsx';
import {fetchRelated, fetchProduct, fetchStyles} from '../../helpers.js';

const ProductLists = () => {
  //Comparison Modal Context
  const [modalView, setModalView] = useState({visibility: 'visible'});

  const toggleModalView = () => {
    if (modalView.visibility === 'visible') {
      setModalView({visibility: 'hidden'});
    } else {
      setModalView({visibility: 'visible'});
    }
  };

  //Product Cards
  // TODO: Create an outfit list state
  const [relatedCards, setRelatedCards] = useState([]);
  const createRelatedCards = (product_id) => { //Returns an array of Product Cards
    return fetchRelated(product_id)
      .then((data) => Promise.all(data.map((id) => fetchProduct(id) //Returns an array of objects with product and style info
            .then((product) => fetchStyles(id)
              .then((styles) => {
                return {product: product, styles: styles};
              }))
            .catch((err) => console.error(err)))))
      .then((items) => setRelatedCards(items.map((item, key) => <ProductCard key={key} modalView={toggleModalView} product={item.product} styles={item.styles} />)))
      .catch((err) => console.error(err));
  }

  // TODO: Make sure it rerenders when the currently viewed product changes
  useEffect(() => {
    createRelatedCards(40356);
  }, []);

  return (
    <React.Fragment>
        <CompareModal toggleModalView={toggleModalView} modalView={modalView} />
      <div className="product-list" id="related-products">

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