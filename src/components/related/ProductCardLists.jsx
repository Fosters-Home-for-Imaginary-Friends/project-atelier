import React from 'react';
import RelatedContext from './related/RelatedContext.jsx';
import RelatedList from './related/RelatedList.jsx';
import OutfitContext from './outfit/OutfitContext.jsx';
import OutfitList from './outfit/OutfitList.jsx';

export default function ProductCardLists () {

  return (
    <React.Fragment>
      <RelatedContext>
        <RelatedList />
      </RelatedContext>
      <OutfitContext>
        <OutfitList />
      </OutfitContext>
    </React.Fragment>
  );
}