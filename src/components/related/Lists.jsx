import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';

const Lists = ({current}) => {

  return (
    <React.Fragment>
      <RelatedProducts current={current} />
    </React.Fragment>
  );
};

export default Lists;