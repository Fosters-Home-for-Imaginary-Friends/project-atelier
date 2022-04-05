import React, {useRef} from 'react';
import ReactDom from 'react-dom';

const CompareModal = ({toggleModalView, modalView}) => {
  const modalRef = useRef();

  return ReactDom.createPortal(
    <div className="compare-modal-container" ref={modalRef} style={modalView}>
      <div className="compare-modal">
        <h2>Comparing</h2>
        <button onClick={toggleModalView}>X</button>
      </div>
    </div>,
    document.getElementById("root")
  );
}
// const UncomparedData = useContext(ModalContext);
// const [ComparedData, setComparedData] = useState([]);

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

// useEffect(() => { //If the data has been updated, get new features
//   getFeatures();
// }, [UncomparedData]);

export default CompareModal;