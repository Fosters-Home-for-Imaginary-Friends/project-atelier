import React from 'react';

const CompareModalRow = (props) => {

  if (!props.feature.current) {
    return (<React.Fragment><tr><td>nothing</td><td>{props.feature.name}</td><td>{JSON.stringify(props.feature.compared)}</td></tr></React.Fragment>);
  } else if (!props.feature.compared) {
    return (<React.Fragment><tr><td>{JSON.stringify(props.feature.current)}</td><td>{props.feature.name}</td><td>{JSON.stringify(props.feature.compared)}</td></tr></React.Fragment>);
  } else {
    return (<React.Fragment><tr><td>{JSON.stringify(props.feature.current)}</td><td>{props.feature.name}</td><td>{JSON.stringify(props.feature.compared)}</td></tr></React.Fragment>);
  }
}

export default CompareModalRow;