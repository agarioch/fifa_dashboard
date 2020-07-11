import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import * as d3 from 'd3'

import './App.css';
import Histogram from "./Histogram";

const overallAccessor = d => parseFloat(d["Overall"]) || 0;

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    d3.csv("../data/data.csv").then(dataset => setData(dataset))
  }, [])
  
  return (
    <div className="App">
    <h1>FIFA Ratings</h1>
      <div className="App__charts">
        <Histogram
          data={data}
          xAccessor={overallAccessor}
          label={"Overall"}
        />
      </div>
    </div>
  );
}

export default App;
