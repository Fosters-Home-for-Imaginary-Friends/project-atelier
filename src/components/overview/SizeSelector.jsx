import React, { useContext } from "react";
import { OverviewContext } from './Overview.jsx';
import Size from './Size.jsx';

const SizeSelector = () => {

  const { currentStyle, loading } = useContext(OverviewContext);

  if (loading) {
    return <div>Loading ...</div>
  }

  let inventory = currentStyle.skus;

  if (inventory.null) {
    return <div></div>
  }

  return (
    <div className="size-selector">
      {Object.keys(inventory).map((key) =>
        <Size key={key} sizes={inventory[key]}/>
      )}
    </div>
  )
};

export default SizeSelector;