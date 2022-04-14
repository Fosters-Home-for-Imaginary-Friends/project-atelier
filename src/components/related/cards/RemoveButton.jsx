import React, {useContext} from 'react';
import {CgRemove} from 'react-icons/cg';
import {setCookie, deleteCookie} from '../../../Cookies.js';
import {OutfitCardContext} from '../outfit/OutfitContext.jsx';
import {IconContext} from 'react-icons';

export default function RemoveButton ({product_id}) {
  const {setOutfitList} = useContext(OutfitCardContext);

  const removeCard = (e) => {
    e.stopPropagation();
    setOutfitList((prev) => {
      let newState = prev.filter((id) => {
        return product_id !== id;
      });

    if (newState.length > 0) {
      setCookie("outfitList", JSON.stringify(newState));
    } else {
      deleteCookie("outfitList");
    }
    return newState;
    });
  }

  return (
    <div className="remove-button action-button" >
      <IconContext.Provider value={{className: "action-icon"}}>
        <CgRemove onClick={removeCard} />
      </IconContext.Provider>
    </div>
  );
}