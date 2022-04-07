import React from 'react';


let IndividualCharacteristic = (props) => {

  let char = props.char;
  console.log(char);
  return (
  <div className="individual-characterstic-container">
    <div className="size-characteristic-container">
      <div className="size-charactiersitic-bars-container">
        <div className="size-bar"> </div>
        <div className="size-bar"> </div>
        <div className="size-bar"> </div>
      </div>
    </div>
    Goodnight Moon
  </div>
  )
}

export default IndividualCharacteristic;