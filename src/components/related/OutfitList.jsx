import React from 'react';
import CardCarousel from './CardCarousel.jsx';
import {getAllCookies} from '../../Cookies.js';

const OutfitList = ({product_id}) => {
  // const [cardData, setCardData] = useState([]);
  //{card: <ProductCard />, productData: getRelatedProductsData()}
  // TODO: optimize map function
  // TODO: read about browser cookie size limits

  console.log("Outfit List: ", getAllCookies());

  return (
    <div className="product-list" id="outfit-list">
      <span>Your Outfit</span>
      <CardCarousel product_id={product_id} />
    </div>
  );
};
{/* <CardCarousel cards={[<AddProductCard key={generateKey()}
setCardData={setCardData} current={current} cardData={cardData} />].concat(cardData.map((item) => item.card))} /> */}

export default OutfitList;