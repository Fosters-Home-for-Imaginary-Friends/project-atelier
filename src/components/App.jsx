import React from "react";
import CSSStyles from "./CSSStyles.jsx";
import Overview from "./overview/Overview.jsx";
import Lists from "./related/Lists.jsx";
import Qna from "./qna/Qna.jsx";
import Ratings from "./ratings/Ratings.jsx";
import {currentPlaceholder} from './related/relatedHelpers.js';
import {createCookie, getAllCookies, deleteCookie} from '../cookies.js';




const App = () => {

  createCookie("object", JSON.stringify({product: 158923}));
  console.log("cookies: ", getAllCookies());
  console.log("parsed cookie: ", JSON.parse(getAllCookies()));
  deleteCookie("object");
  console.log("cookies: ", getAllCookies());


  return (
    <div>
      <Overview />
      <Lists current={currentPlaceholder} />
      <Qna />
      <Ratings />
      <CSSStyles />
    </div>
  );
}

export default App;