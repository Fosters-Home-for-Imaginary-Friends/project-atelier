import React, { createContext, useState, useMemo, useEffect } from "react";
import CSSStyles from "./CSSStyles.jsx";
import Overview from "./overview/Overview.jsx";
import RelatedProducts from "./related/RelatedProducts.jsx";
import OutfitList from './related/OutfitList.jsx';
import Qna from "./qna/Qna.jsx";
import Ratings from "./ratings/Ratings.jsx";
import {getProduct} from '../helpers.js';

export const AppContext = createContext({});

const App = () => {

  const [productId, setProductId] = useState(40344);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    getProduct(40344)
      .then((response) => setProductData(response));
  }, []);

  return (
    <AppContext.Provider value={{productId, productData}}>
      <div>
        <Overview />
        <RelatedProducts product_id={40344} />
        <OutfitList product_id={40344} />
        <Qna />
        <Ratings />
        <CSSStyles />
      </div>
    </AppContext.Provider>
  );
}

export default App;