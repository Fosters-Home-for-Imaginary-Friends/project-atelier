import React, { createContext, useState } from "react";
import CSSStyles from "./CSSStyles.jsx";
import Overview from "./overview/Overview.jsx";
import RelatedProducts from "./related/RelatedProducts.jsx";
import OutfitList from './related/OutfitList.jsx';
import Qna from "./qna/Qna.jsx";
import Ratings from "./ratings/Ratings.jsx";

export const AppContext = createContext({});

const App = () => {

  const [productId, setProductId] = useState(40344);

  return (
    <AppContext.Provider value={{ productId, setProductId }}>
      <div>
        <Overview />
        <RelatedProducts product_id={40344} />
        <Qna />
        <Ratings />
        <CSSStyles />
      </div>
    </AppContext.Provider>
  );
}

export default App;