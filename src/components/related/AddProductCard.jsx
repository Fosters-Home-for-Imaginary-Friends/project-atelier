import React, {useContext} from 'react';
import {OutfitContext} from './OutfitList.jsx';
import {AiOutlinePlus} from 'react-icons/ai';

const AddProductCard = () => {
  const {addProduct} = useContext(OutfitContext);

  return (
    <div className="product-card" id="add-card" onClick={addProduct}>
      <div id="add-button">
        <AiOutlinePlus size={150} />
      </div>
    </div>
  );
};

export default AddProductCard;