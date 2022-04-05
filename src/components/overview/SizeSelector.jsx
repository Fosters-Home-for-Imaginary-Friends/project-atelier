import React, { useContext } from "react";
import { OverviewContext } from './Overview.jsx';
import Size from './Size.jsx';

const SizeSelector = () => {

  const { currentStyle, loading } = useContext(OverviewContext);

  if (loading) {
    return <div>Loading ...</div>
  }

  console.log(Object.keys(currentStyle.skus));
  let inventory = currentStyle.skus;

  return (
    <div className="size-selector">
      {Object.keys(inventory).map((key) =>
        <Size key={key} sizes={inventory[key]}/>
      )}
    </div>
  )
};

export default SizeSelector;