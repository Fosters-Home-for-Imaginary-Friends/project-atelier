import React from 'react';


let IndividualCharacteristic = (props) => {

  let char = props.char;
  console.log(char);
  return (
  <div className="individual-characterstic-container">
    <div className="size-characteristic-container">
      <h2>Goodnight Moon</h2>
      <div className="size-charactiersitic-bars-container">
        <div className="size-bar"></div>
        <div className="size-bar"> </div>
        <div className="size-bar"> </div>
      </div>
      <div>
      <span>Too Big</span>
      <span>Too Big</span>
      <span>Too Big</span>
      </div>
    </div>
  </div>
  )
}

export default IndividualCharacteristic;