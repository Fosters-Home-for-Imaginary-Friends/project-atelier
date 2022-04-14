import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import {IconContext} from 'react-icons';

const AddProductCard = ({addProduct}) => {

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