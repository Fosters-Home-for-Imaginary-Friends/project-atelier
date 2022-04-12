import React, {useContext} from 'react';
import {OutfitContext} from './OutfitList.jsx';
import {AiOutlinePlus} from 'react-icons/ai';
import {IconContext} from 'react-icons';

const AddProductCard = () => {
  const {addProduct} = useContext(OutfitContext);

  return (
    <div className="product-card" id="add-card" onClick={addProduct}>
      <div id="add-button">
        <IconContext.Provider value={{className: "plus-icon"}}>
          <AiOutlinePlus />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default AddProductCard;