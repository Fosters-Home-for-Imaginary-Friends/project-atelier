import React from 'react';
import ProductList from './ProductList.jsx';
import ProductCard from './ProductCard.jsx';

const relatedProducts = [1,2,3,4,5,6,7,8,9,10];
const outfitProducts = [11,12,13,14,15,16,17,18,19,20];
const listContexts = {
  relatedProducts: relatedProducts.map((num) => <ProductCard num={num} key={num} />),
  outfitProducts: outfitProducts.map((num) => <ProductCard num={num} key={num} />)
};
const ListContext = React.createContext(listContexts);

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
        <span>OutfitList</span>
        <ListContext.Provider value={listContexts.outfitProducts}>
          <ProductList />
        </ListContext.Provider>
      </div>
    </React.Fragment>

  );
};

export default ProductLists;
export {ListContext};