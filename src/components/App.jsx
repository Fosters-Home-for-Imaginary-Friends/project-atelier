import React from "react";
import CSSStyles from "./CSSStyles.jsx";
import Overview from "./overview/Overview.jsx";
import RelatedProducts from "./related/RelatedProducts.jsx";
import OutfitList from './related/OutfitList.jsx';
import Qna from "./qna/Qna.jsx";
import Ratings from "./ratings/Ratings.jsx";

const App = () => {

  return (
    <div>
      <Overview />
      <RelatedProducts product_id={40356} />
      {/* <OutfitList current={currentPlaceholder} /> */}
      <Qna />
      <Ratings />
      <CSSStyles />
    </div>
  );
}

export default App;