import React from 'react';
import RelatedContext from './RelatedContext.jsx';
import RelatedProducts from './RelatedProducts.jsx';

export default function ProductCardLists () {

  return (
    <RelatedContext>
      <RelatedProducts />
    </RelatedContext>
  );
}