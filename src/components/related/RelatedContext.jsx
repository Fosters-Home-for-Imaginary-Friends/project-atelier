import React, {useState, useEffect, useContext, createContext} from 'react';
import {AppContext} from '../App.jsx';
import {getRelated} from '../../helpers.js';

export const RelatedCardContext = createContext();

export default function RelatedContext ({children}) {
  const [relatedList, setRelatedList] = useState([]);
  const {productData} = useContext(AppContext);

  useEffect(() => {
    if (!productData.id) {
      return;
    }
    getRelated(productData.id)
      .then((data) => {
        let newList = Array.from(new Set(data)).filter((id) => id !== productData.id);
        setRelatedList(newList);
      })
      .catch((err) => console.error(err));
  }, [productData.id]);

  return (
    <RelatedCardContext.Provider value={{relatedList}}>
      {children}
    </RelatedCardContext.Provider>
  );
}