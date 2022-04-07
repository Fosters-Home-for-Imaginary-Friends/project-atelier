import React, {useState, useEffect} from 'react';
import CardCarousel from './CardCarousel.jsx';
import {AddProductCard, ProductCard} from './ProductCards.jsx';
import {generateKey, getOutfitListData} from './RelatedHelpers.js';
import {getAllCookies, getCookie} from '../../Cookies.js';

const OutfitList = ({current}) => {
  const [cardData, setCardData] = useState([]);
  //{card: <ProductCard />, productData: getRelatedProductsData()}
  // TODO: optimize map function
  // TODO: read about browser cookie size limits

  useEffect(() => {
    const outfitList = getCookie("outfitList");
    if (outfitList !== "") {
      getOutfitListData(JSON.parse(outfitList))
        .then((productData) => setCardData(() => {
          return productData.map((product) => ({card: (<ProductCard setCardData={setCardData}
            card={product} current={current} key={generateKey()}
            related={false} />), productData: product}));
        }))
        .catch((err) => console.error(err));
    }
  }, []);

  console.log("Outfit List: ", getAllCookies());

  return (
    <div className="product-list" id="outfit-list">
      <span>Your Outfit</span>
      <CardCarousel cards={[<AddProductCard key={generateKey()}
      setCardData={setCardData} current={current} cardData={cardData} />].concat(cardData.map((item) => item.card))} />
    </div>
  );
};

export default OutfitList;