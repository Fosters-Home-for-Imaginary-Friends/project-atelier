import React, {useContext} from 'react';
import CardCarousel from '../cards/CardCarousel.jsx';
import {AppContext} from '../../App.jsx';
import ProductCard from '../cards/ProductCard.jsx';
import {RelatedCardContext} from './RelatedContext.jsx';

const RelatedProducts = () => {
  const {relatedList} = useContext(RelatedCardContext);
  const {setProductData} = useContext(AppContext);

  return (
    <div className="product-list" id="related-list">
      <h3 className="related-title">RELATED PRODUCTS</h3>
        <CardCarousel length={relatedList.length}>
          {relatedList.map((id) => <ProductCard key={id} product_id={id} related={true} setProductData={setProductData} />)}
        </CardCarousel>
    </div>
  );
}

export default RelatedProducts;