import React, {useContext} from 'react';
import CardCarousel from './CardCarousel.jsx';
import {AppContext} from '../App.jsx';
import ProductCard from './ProductCard.jsx';
import {RelatedCardContext} from './RelatedContext.jsx';

const RelatedProducts = () => {
  const {relatedList} = useContext(RelatedCardContext);
  const {setProductData} = useContext(AppContext);

  return (
    <div className="product-list" id="related-list">
      <h3 className="related-title">RELATED PRODUCTS</h3>
        <CardCarousel length={relatedList.length}>
          {relatedList.map((id) => <ProductCard key={id} product_id={id} setProductData={setProductData} />)}
        </CardCarousel>
    </div>
  );
}

export default RelatedProducts;