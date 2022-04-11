import React, { createContext, useState, useEffect } from "react";
import Overview from "./overview/Overview.jsx";
import RelatedProducts from "./related/RelatedProducts.jsx";
import OutfitList from './related/OutfitList.jsx';
import Qna from "./qna/Qna.jsx";
import Ratings from "./ratings/Ratings.jsx";
import {getProduct} from '../helpers.js';

export const AppContext = createContext({});

const App = () => {

  const [productId, setProductId] = useState(40344);
  const [productData, setProductData] = useState({});

  useEffect(() => {
    getProduct(40344)
      .then((response) => setProductData(response));
  }, []);

  return (
    <AppContext.Provider value={{productId, setProductId, productData, setProductData}}>
      <Overview />
      <RelatedProducts />
      <OutfitList />
      <Qna />
      <Ratings />
    </AppContext.Provider>
  );
}

export default App;