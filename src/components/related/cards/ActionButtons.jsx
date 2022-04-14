import React, {useContext} from 'react';
import {CgRemove} from 'react-icons/cg';
import {setCookie, deleteCookie} from '../../Cookies.js';
import {OutfitContext} from './OutfitList.jsx';
import {IconContext} from 'react-icons';

const RemoveButton = ({product_id}) => {
  const {setOutfitList} = useContext(OutfitContext);

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
};

export {RemoveButton};