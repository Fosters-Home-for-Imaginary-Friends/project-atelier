import React, {useState, useEffect} from 'react';
import ProductList from './ProductList.jsx';
import ProductCard from './ProductCard.jsx';
import CompareModal from './CompareModal.jsx';
import {fetchRelated, fetchProduct} from '../../helpers.js';

//Placeholder data for the compare-modal
const modalContext = {};
const ModalContext = React.createContext(modalContext);

const ProductLists = () => {
  const [relatedCards, setRelatedCards] = useState([]);
  const [outfitCards, setOutfitCards] = useState([]);

  const createRelatedCards = (product_id) => {
    return fetchRelated(product_id)
      .then((data) => {
        console.log(data);
        return data.map((id) => fetchProduct(id));
      })
      .then((promises) => Promise.all(promises))
      .then((products) => products.map((product, key) => <ProductCard key={key} product={product} />))
      .then((cards) => setRelatedCards(cards))
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    createRelatedCards(40344);
  }, []);



  return (
    <React.Fragment>
      <div className="product-list">
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
export {ModalContext};