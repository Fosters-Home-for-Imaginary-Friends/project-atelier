import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';

const ListContainer = ({current}) => {

  return (
    <React.Fragment>
      <RelatedProducts current={current} product_id={current.id} />
    </React.Fragment>
  );
};

export default ListContainer;