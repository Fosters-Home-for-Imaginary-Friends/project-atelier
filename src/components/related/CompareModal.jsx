import React, {useRef, useEffect} from 'react';
import ReactDom from 'react-dom';

const CompareModal = ({toggleModalView, modalView, card}) => {
  const modalRef = useRef();
  console.log("selected card: ", card);
  useEffect(() => {
  }, [card]);

  return ReactDom.createPortal(
    <div className="compare-modal-container" ref={modalRef} style={modalView}>
      <div className="compare-modal">
        <h2>Comparing</h2>
        <button onClick={() => {
          console.log("coordinates:", modalRef.current.offsetTop);
          toggleModalView();
        }}>X</button>
      </div>
    </div>,
    document.getElementById("root")
  );
}

// const getFeatures = () => { //Parses for features
//   let comparedFeatures = []; //Array of compared features
//   let currentFeats = UncomparedData.current.features; //currently viewed item
//   let compareFeats = UncomparedData.compared.features; //selected item for comparison

//   for (let feature in currentFeats) { //Compares the currently viewed item's features
//     let comparedFeat = { //compared Feature to be pushed into array of compared features
//       name: feature,
//       current: currentFeats[feature],
//       compared: false
//     };
//     if (compareFeats[feature]) {
//       comparedFeat.compared = compareFeats[feature];
//     }
//     comparedFeatures.push(comparedFeat);
//   }

//   for (let feature in compareFeats) { //If the feature doesn't exist in current features, then add it to the table
//     if(!currentFeats[feature]) {
//       comparedFeatures.push({
//         name: feature,
//         current: false,
//         compared: compareFeats[feature]
//       });
//     }
//   }
//   setComparedData(comparedFeatures);
// };

export default CompareModal;