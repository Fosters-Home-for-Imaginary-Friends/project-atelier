import React, {useContext} from 'react';
import CardCarousel from '../cards/CardCarousel.jsx';
import {OutfitCardContext} from './OutfitContext.jsx';
import AddProductCard from '../cards/AddProductCard.jsx';
import ProductCard from '../cards/ProductCard.jsx';
import {AppContext} from '../../App.jsx';

const OutfitList = () => {
  const {outfitList, addProduct} = useContext(OutfitCardContext);
  const {setProductData} = useContext(AppContext);

  return (
    <div className="product-list" id="outfit-list">
      <h3 className="related-title">YOUR OUTFIT</h3>
        <CardCarousel length={outfitList.length + 1}>
          {[<AddProductCard key={"addproductcard"} addProduct={addProduct} />]
          .concat(outfitList.map((id) => <ProductCard key={id} product_id={id} related={false} setProductData={setProductData}  />))}
        </CardCarousel>
    </div>
  );
};

export default OutfitList;