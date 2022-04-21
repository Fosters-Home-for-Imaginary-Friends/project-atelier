import React, { createContext, useState, useEffect } from 'react';
import Header from './header/Header.jsx';
import Overview from './overview/Overview.jsx';
import ProductCardLists from './related/ProductCardLists.jsx';
import Qna from './qna/Qna.jsx';
import Ratings from './ratings-reviews/Ratings.jsx';
import { getProduct } from '../helpers.js';

export const AppContext = createContext({});

function App() {
  const [productId, setProductId] = useState(40344);
  const [productData, setProductData] = useState({});

  useEffect(() => {
    getProduct(40344)
      .then((response) => setProductData(response));
  }, []);

  return (
    <AppContext.Provider value={{
      productId, setProductId, productData, setProductData,
    }}
    >
      <Header />
      <Overview />
      <ProductCardLists />
      <Qna />
      <Ratings />
    </AppContext.Provider>
  );
}

export default App;
