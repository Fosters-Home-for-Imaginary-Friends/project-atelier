import React, {useRef, useEffect, useState} from 'react';
import ReactDom from 'react-dom';

const CompareModal = ({toggleModalView, modalView, card, overview}) => {
  const modalRef = useRef();
  useEffect(() => {
  }, []);

  const [features, setFeatures] = useState({});

  const getFeatures = () => { //Parses for features
    let modalTable = {};
    let current = overview.features;
    let selected = card.features;

    for (let i = 0; i < current.length; i++) {
      modalTable[current[i].feature] = {
        current: current[i].value,
        selected: false
      };
    }
    for (let i = 0; i < selected.length; i++) {
      if (modalTable[selected[i].feature]) {
        modalTable[selected[i].feature].selected = selected[i].value;
      } else {
        modalTable[selected[i].feature] = {
          current: false,
          selected: selected[i].value
        };
      }
    }
    return modalTable;
  };

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


export default CompareModal;