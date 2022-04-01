/* eslint-disable no-unused-vars */
import React, {useContext, useState, useEffect} from 'react';
import {ModalContext} from './ProductLists.jsx';
import CompareModalRow from './CompareModalRow.jsx';

const CompareModal = () => {
  const UncomparedData = useContext(ModalContext);
  const [ComparedData, setComparedData] = useState([]);

  const getFeatures = () => { //Parses for features
    let comparedFeatures = []; //Array of compared features
    let currentFeats = UncomparedData.current.features; //currently viewed item
    let compareFeats = UncomparedData.compared.features; //selected item for comparison

    for (let feature in currentFeats) { //Compares the currently viewed item's features
      let comparedFeat = { //compared Feature to be pushed into array of compared features
        name: feature,
        current: currentFeats[feature],
        compared: false
      };
      if (compareFeats[feature]) {
        comparedFeat.compared = compareFeats[feature];
      }
      comparedFeatures.push(comparedFeat);
    }

    for (let feature in compareFeats) { //If the feature doesn't exist in current features, then add it to the table
      if(!currentFeats[feature]) {
        comparedFeatures.push({
          name: feature,
          current: false,
          compared: compareFeats[feature]
        });
      }
    }
    setComparedData(comparedFeatures);
  };

  useEffect(() => { //If the data has been updated, re-sort features
    getFeatures();
  }, [UncomparedData]);



  return (
    <div className="compare-modal">
      <table>
        <thead>
          <tr>
            <th>{UncomparedData.current.name}</th>
            <th>characteristic</th>
            <th>{UncomparedData.compared.name}</th>
          </tr>
        </thead>
        <tbody>
          {ComparedData.map((feature) => {
            console.log(ComparedData);
            return <CompareModalRow key={0} feature={feature} />})}
        </tbody>
      </table>
    </div>
  );
}

export default CompareModal;