import React from 'react';

let BarGraph = () => {

  // const Bar = () => {
  //   return ()
  // }


  return (
    <div className="bar-graph-container">
      <div className="star-bar">
        <span>5 Star</span>
        <div className="bar">

        </div>
      </div>
      <div className="star-bar">
        <span>4 Star</span>
        <div className="bar">
        </div>
      </div>
      <div className="star-bar">
        <span>3 Star</span>
        <div className="bar">
        </div>
      </div>
      <div className="star-bar">
        <span>2 Star</span>
        <div className="bar">
        </div>
      </div>
      <div className="star-bar">
        <span>1 Star</span>
        <div className="bar">
        </div>
      </div>

    </div>
  )
}

export default BarGraph;