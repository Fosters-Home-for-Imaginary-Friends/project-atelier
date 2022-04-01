import React from "react";
import CSSStyles from "./CSSStyles.jsx";
import Overview from "./overview/Overview.jsx";
import ProductLists from "./related/ProductLists.jsx";

const App = () => {
  return (
    <div>
      <CSSStyles />
      <Overview />
      <ProductLists />
    </div>
  );
}

export default App;