import React, {useContext} from 'react';
import ProductCard from './ProductCard.jsx';
import AddProductCard from './AddProductCard.jsx';
import {OutfitContext} from './OutfitList.jsx';
import {RelatedContext} from './RelatedProducts.jsx';
import {AppContext} from '../App.jsx';


const RelatedCards = function RelatedCards() {
  const {relatedList} = useContext(RelatedContext);
  const {setProductData} = useContext(AppContext);

  return (
    <React.Fragment>
      {relatedList.map((id) => <ProductCard key={id} product_id={id} related={true} setProductData={setProductData} />)}
    </React.Fragment>
  );
};

const OutfitCards = function OutfitCards() {
  const {outfitList, setOutfitList} = useContext(OutfitContext);
  const {setProductData} = useContext(AppContext);

  return (
    <div className="carousel"> {/* The part that scrolls when you press a button */}
      {[<AddProductCard key={"addproductcard"} setOutfitList={setOutfitList} />]
      .concat(outfitList.map((id) => <ProductCard key={id} product_id={id} related={false} setProductData={setProductData}  />))}
    </div>
  );
};

export {RelatedCards, OutfitCards};