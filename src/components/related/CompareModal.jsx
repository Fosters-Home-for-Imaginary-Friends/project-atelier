/* eslint-disable no-unused-vars */
import React, {useContext, useState} from 'react';
import {CompareContext} from './ProductLists.jsx';

const CompareModal = () => {
  const compare = useContext(CompareContext);
  const [compared, setCompared] = useState([]);

  const compareFeature = (feature) => {
    return (
      <React.Fragment>
        <tr>
          <td>{feature.current.value}</td>
          <td>{feature.name}</td>
          <td>{feature.compared.value}</td>
        </tr>
      </React.Fragment>
    );
  };

  const getFeatures = () => { //Parses for features
    let comparedFeatures = []; //Array of compared features
    let currentFeats = compare.current.features; //currently viewed item
    let compareFeats = compare.current.features; //selected item for comparison

    for (let feature in currentFeats) { //Compares the currently viewed item's features
      let comparedFeat = { //compared Feature to be pushed into array of compared features
        name: feature,
        current: currentFeats[feature],
        compare: false
      };
      if (compareFeats[feature]) {
        comparedFeat.compare = compareFeats[feature];
      }
      comparedFeatures.push(comparedFeat);
    }

    for (let feature in compareFeats) { //If the feature doesn't exist in current features, then add it to the table
      if(!currentFeats[feature]) {
        comparedFeatures.push({
          name: feature,
          current: false,
          compare: compareFeats[feature]
        });
      }
    }
    return comparedFeatures;
  };

  return (
    <div className="compare-modal">
      <table>
        <thead>
          <tr>
            <th>Something</th>
            <th>characteristic</th>
            <th>Something</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  );
}

export default CompareModal;