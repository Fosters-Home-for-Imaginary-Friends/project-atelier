import React, {createContext, useState, useEffect, useCallback, useContext} from 'react';
import {getCookie, setCookie} from '../../../Cookies.js';
import {AppContext} from '../../App.jsx';

export const OutfitCardContext = createContext();

export default function OutfitContext ({children}) {
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
  }, [productData.id]);

  return (
    <OutfitCardContext.Provider value={{outfitList, setOutfitList, addProduct}}>
      {children}
    </OutfitCardContext.Provider>
  )
}