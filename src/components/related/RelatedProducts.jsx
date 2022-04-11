import React, {useEffect, useState} from 'react';
import CardCarousel from './CardCarousel.jsx';
import {getRelated} from '../../helpers.js';

const RelatedProducts = ({product_id}) => {
  const [relatedList, setRelatedList] = useState([]);

  useEffect(() => {
    getRelated(product_id)
      .then((data) => {
        setRelatedList(data);
      })
      .catch((err) => console.error(err));
  }, [product_id]);

  return (
    <div className="product-list" id="related-list">
      <h3 className="related-title">WEAR WITH</h3>
      <CardCarousel product_id={product_id} related={true} list={relatedList} />
    </div>
  );
}

export default RelatedProducts;