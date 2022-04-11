import React, {useEffect, useState, createContext} from 'react';
import CardCarousel from './CardCarousel.jsx';
import {getCookie} from '../../Cookies.js';

export const OutfitContext = createContext({});

const OutfitList = () => {
  const [outfitList, setOutfitList] = useState([]);

  useEffect(() => {
    let cookies = getCookie("outfitList");
    if (cookies !== "") {
      setOutfitList((list) => list.concat(JSON.parse(cookies)))
    }
  }, []);

  return (
    <div className="product-list" id="outfit-list">
      <h3 className="related-title">YOUR OUTFIT</h3>
      <OutfitContext.Provider value={{outfitList, setOutfitList}}>
        <CardCarousel />
      </OutfitContext.Provider>

    </div>
  );
};

export default OutfitList;