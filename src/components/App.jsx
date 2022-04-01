import React from "react";
import Styles from "./Styles.jsx";
import Overview from "./overview/Overview.jsx";
import ProductLists from "./related/ProductLists.jsx";
import Ratings from "./ratings/Ratings.jsx";

const App = () => {
  return (
    <div>
      <Styles />
      <Overview />
      <ProductLists />
      <Ratings />
    </div>
  );
}

export default App;