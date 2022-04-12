import React, {useEffect, useState, createContext, useContext, useCallback} from 'react';
import CardCarousel from './CardCarousel.jsx';
import {getCookie} from '../../Cookies.js';
export const OutfitContext = createContext({});
import {AppContext} from '../App.jsx';
import {setCookie} from '../../Cookies.js';

const OutfitList = () => {
  const [outfitList, setOutfitList] = useState([]);
  const {productData} = useContext(AppContext);

  useEffect(() => {
    let cookies = getCookie("outfitList");
    if (cookies !== "") {
      setOutfitList((list) => list.concat(JSON.parse(cookies)))
    }
  }, []);

  const addProduct = useCallback(() => {
    setOutfitList((prev) => {
      if (prev.includes(productData.id)) {
        return prev;
      }
      let newList = prev.concat([productData.id]);
      setCookie("outfitList", JSON.stringify(newList));
      return newList;
    });
  });

  return (
    <div className="product-list" id="outfit-list">
      <h3 className="related-title">YOUR OUTFIT</h3>
      <OutfitContext.Provider value={{outfitList, setOutfitList, addProduct}}>
        <CardCarousel related={false} length={outfitList.length} />
      </OutfitContext.Provider>
    </div>
  );
};

export default OutfitList;