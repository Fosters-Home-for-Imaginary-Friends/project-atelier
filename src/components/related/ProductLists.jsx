import React from 'react';
import ProductList from './ProductList.jsx';

const relatedProducts = [1,2,3,4,5,6,7,8,9,10];
const outfitProducts = [11,12,13,14,15,16,17,18,19,20];
const ListContext = React.createContext(relatedProducts);

const ProductLists = () => {
  return (
    <React.Fragment>
      <div className="product-list">
        <span>Related Products</span>
        <ListContext.Provider value={relatedProducts}>
          <ProductList />
        </ListContext.Provider>

      </div>
      <div className="product-list">
        <span>OutfitList</span>
        <ListContext.Provider value={outfitProducts}>
          <ProductList />
        </ListContext.Provider>
      </div>
    </React.Fragment>

  );
};

export default ProductLists;
export {ListContext};