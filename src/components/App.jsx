import React from "react";
import Styles from "./Styles.jsx";
import Overview from "./overview/Overview.jsx";
import ProductLists from "./related/ProductLists.jsx";

const App = () => {
  return (
    <div>
      <Styles />
      <Overview />
      <ProductLists />
    </div>
  );
}

export default App;