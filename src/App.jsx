import React, {useEffect, useState} from 'react';
import * as d3 from 'd3'

import './App.css';
import Histogram from "./Components/Histogram";
import MetricSelect from "./Components/MetricSelect";
import {METRICS} from "./Constants";


function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMetric, setSelected] = useState("Overall")
  const metricAccessor = d => parseFloat(d[selectedMetric]) || 0;

  useEffect(() => {
    setIsLoading(true);
    d3.csv("../data/data.csv").then(dataset => {
      setData(dataset);
      setIsLoading(false);
    })
  }, [])


  return (
    <div className="App">
      <h1>FIFA Ratings</h1>
        <div className="App__charts">
          <Histogram
            data={data}
            xAccessor={metricAccessor}
            label={selectedMetric}
            isLoading={isLoading}
          />
        </div>
      <MetricSelect metrics={METRICS} onSelect={setSelected} selectedMetric={selectedMetric}/>
    </div>
  );
}

export default App;
