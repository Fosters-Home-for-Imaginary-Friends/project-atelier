import React from "react";
import CSSStyles from "./CSSStyles.jsx";
import Overview from "./overview/Overview.jsx";
import RelatedProducts from "./related/RelatedProducts.jsx";
import OutfitList from './related/OutfitList.jsx';
import Qna from "./qna/Qna.jsx";
import Ratings from "./ratings/Ratings.jsx";
import {currentPlaceholder} from './related/RelatedHelpers.js';
import {createCookie, getAllCookies, deleteCookie} from '../cookies.js';

const App = () => {

  return (
    <div>
      <Overview />
      <RelatedProducts current={currentPlaceholder} />
      <OutfitList current={currentPlaceholder} />
      <Qna />
      <Ratings />
      <CSSStyles />
    </div>
  );
}

export default App;