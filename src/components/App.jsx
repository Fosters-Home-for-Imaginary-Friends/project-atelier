import React from "react";
import Overview from "./overview/Overview.jsx";
import ProductLists from "./related/ProductLists.jsx";
import Ratings from "./ratings/Ratings.jsx";

const App = () => {
  return (
    <div>
      <h1>Hello Bradford</h1>
      <Overview />
      <ProductLists />
      <Ratings />
    </div>
  );
}

export default App;