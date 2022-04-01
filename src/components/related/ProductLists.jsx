import React from 'react';
import ProductList from './ProductList.jsx';
import ProductCard from './ProductCard.jsx';
import CompareModal from './CompareModal.jsx';

//This is the placeholder data I am using to render an array of ProductCard components
//I am creating a context object for the products which we pass to the Product List component
//When their context changes, the component re-renders
//In the future we should separate the related and outfit contexts, that way only one of them will re-render at a time
const relatedProducts = [1,2,3,4,5,6,7,8,9,10];
const outfitProducts = [11,12,13,14,15,16,17,18,19,20];
const listContexts = {
  relatedProducts: relatedProducts.map((num) => <ProductCard num={num} key={num} />),
  outfitProducts: outfitProducts.map((num) => <ProductCard num={num} key={num} />)
};
const ListContext = React.createContext(listContexts);

//Placeholder data for the compare-modal
const comparedProducts = {
  current: {
    name: "Red Bull",
    features: {
      caffeine: true,
      taurine: true
    }
  },
  compared: {
    name: "Monster",
    features: {
      caffeine: true,
      taurine: true,
      guarana: true
    }
  }
};
const CompareContext = React.createContext(comparedProducts);


const ProductLists = () => {
  return (
    <React.Fragment>
      <div className="product-list">
        <span>Related Products</span>
        <ListContext.Provider value={listContexts.relatedProducts}>
          <ProductList />
        </ListContext.Provider>

      </div>
      <div className="product-list">
        <span>Outfit List</span>
        <ListContext.Provider value={listContexts.outfitProducts}>
          <ProductList />
        </ListContext.Provider>
      </div>
      <CompareContext.Provider value={comparedProducts}>
        <CompareModal />
      </CompareContext.Provider>
    </React.Fragment>

  );
};

export default ProductLists;
export {ListContext, CompareContext};