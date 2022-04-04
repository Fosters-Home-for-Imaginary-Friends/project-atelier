import React, {useRef} from 'react';
import ReactDom from 'react-dom';

const CompareModal = () => {

  const modalRef = useRef();

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      // setShowModal(false);
    }
  };
  const style = {
    visibility: 'hidden'
  };

  return ReactDom.createPortal(
    <div className="compare-modal-container" ref={modalRef} onClick={closeModal}>
      <div className="compare-modal">
        <h2>This is a Modal</h2>
        <button onClick={() => {}}>X</button>
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