import React from "react";
import CSSStyles from "./CSSStyles.jsx";
import Overview from "./overview/Overview.jsx";
import ProductLists from "./related/ProductLists.jsx";
import Ratings from "./ratings/Ratings.jsx";
import config from '/config.js';
import axios from 'axios';

const App = () => {

  const header = {
    'Authorization': `token ${config.TOKEN}`
  };
  const host = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/';

  return (
    <div>
      <CSSStyles />
      <Overview />
      <ProductLists />
      <Ratings />
    </div>
  );
}

export default App;