import React, {useEffect, useState, useContext, createContext} from 'react';
import CardCarousel from './CardCarousel.jsx';
import {getRelated} from '../../helpers.js';
import {AppContext} from '../App.jsx';

export const RelatedContext = createContext({});

// TODO: Optimize loading time by only loading first 3 cards on initial site render
const RelatedProducts = () => {
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
    <div className="product-list" id="related-list">
      <h3 className="related-title">RELATED PRODUCTS</h3>
      <RelatedContext.Provider value={{relatedList, setRelatedList}}>
        <CardCarousel related={true} length={relatedList.length} />
      </RelatedContext.Provider>
    </div>
  );
}

export default RelatedProducts;