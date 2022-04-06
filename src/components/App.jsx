import React from "react";
import CSSStyles from "./CSSStyles.jsx";
import Overview from "./overview/Overview.jsx";
import Lists from "./related/Lists.jsx";
import Qna from "./qna/Qna.jsx";
import Ratings from "./ratings/Ratings.jsx";
import {currentPlaceholder} from './related/relatedHelpers.js';


const App = () => {

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