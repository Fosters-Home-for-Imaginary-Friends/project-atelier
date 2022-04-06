import React from 'react';

let BarGraph = () => {

  // const Bar = () => {
  //   return ()
  // }


  return (
    <div className="bar-graph-container">
      <div className="graph-title-bar">
        <span className="bar-titles">5 Stars</span>
        <div className="star-bar">
          <div className="bar"></div>
          <div className="scored-bar"></div>
        </div>
      </div>
      <div className="graph-title-bar">
        <span className="bar-titles">4 Stars</span>
        <div className="star-bar">
          <div className="bar"></div>
          <div className="scored-bar"></div>
        </div>
      </div>
      <div className="graph-title-bar">
        <span className="bar-titles">3 Stars</span>
        <div className="star-bar">
          <div className="bar"></div>
          <div className="scored-bar"></div>
        </div>
      </div>
      <div className="graph-title-bar">
        <span className="bar-titles">2 Stars</span>
        <div className="star-bar">
          <div className="bar"></div>
          <div className="scored-bar"></div>
        </div>
      </div>
      <div id="one-star-graph" className="graph-title-bar">
        <span className="bar-titles">1 Stars</span>
        <div className="star-bar">
          <div className="bar"></div>
          <div className="scored-bar"></div>
        </div>
      </div>

    </div>
  )
}

export default BarGraph;