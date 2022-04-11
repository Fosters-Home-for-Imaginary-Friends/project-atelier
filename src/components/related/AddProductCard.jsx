import React, {useContext} from 'react';
import {AppContext} from '../App.jsx';
import {OutfitContext} from './OutfitList.jsx';
import {setCookie} from '../../Cookies.js';
import {AiOutlinePlus} from 'react-icons/ai';

const AddProductCard = () => {
  const {productData} = useContext(AppContext);
  const {setOutfitList} = useContext(OutfitContext);

  // TODO: Notify user that the card is already in their list
  const addProduct = () => {
    setOutfitList((prev) => {
      if (prev.includes(productData.id)) {
        return prev;
      }
      let newList = prev.concat([productData.id]);
      setCookie("outfitList", JSON.stringify(newList));
      return newList;
    });
  }

  return (
    <div className="product-card" id="add-card" onClick={addProduct}>
      <div id="add-button">
        <AiOutlinePlus size={150} />
      </div>
    </div>
  );
};

export default AddProductCard;