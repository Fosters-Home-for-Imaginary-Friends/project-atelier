import React, { useContext } from 'react';
import { RatingsContext } from './Ratings.jsx';
import IndividualCharacteristic from './IndividualCharacteristic.jsx';

let Characteristics = () => {

  const {metaRating} = useContext(RatingsContext)
  let chars = [];
  for( let k in metaRating.characteristics) {
    let charObj = {[k]: metaRating.characteristics[k]};
    chars.push(charObj)
  }

  return (
  <div className="characteristics-container">
    {chars.map((char, i) => {
     return  <IndividualCharacteristic char={char} key={i}/>
    })}
  </div>
  );
}

export default Characteristics;