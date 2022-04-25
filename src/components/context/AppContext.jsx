import React, {
  createContext, useState, useEffect, useMemo,
} from 'react';
import { getProduct } from '../../helpers.js';

export const AppContext = createContext({});

export function AppContextProvider({children}) {
  const [productId, setProductId] = useState(40344);
  const [productData, setProductData] = useState({ id: 40344 });

  useEffect(() => {
    getProduct(40344)
      .then((response) => setProductData(response))
      .catch((error) => console.log('An error occured: ', error))
  }, []);

  const AppContextValues = useMemo(() => ({
    productId,
    setProductId,
    productData,
    setProductData,
  }));

  return (
    <AppContext.Provider value={AppContextValues}>
      {children}
    </AppContext.Provider>
  );
}
