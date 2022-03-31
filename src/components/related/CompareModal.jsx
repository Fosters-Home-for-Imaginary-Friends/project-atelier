import React from 'react';

const comparedProducts = {
  current: {
    name: "Red Bull",
    characteristics: {
      caffeine: true,
      taurine: true
    }
  },
  compared: {
    name: "Monster",
    characteristics: {
      caffeine: true,
      taurine: true,
      guarana: true
    }
  }
};

const CompareModal = () => {
  return (
    <div>
      <table>
        <tr>
          <th>{comparedProducts.current.name}</th>
          <th>characteristic</th>
          <th>{comparedProducts.compared.name}</th>
        </tr>
      </table>
    </div>
  );
}

export default CompareModal;