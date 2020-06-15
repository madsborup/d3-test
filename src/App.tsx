import React from 'react';
import './App.css';
import BarChart from './components/BarChart'

function App() {
  return (
    <div className="App">
      <BarChart data={[2, 1, 4, 7, 3, 12]}/>
    </div>
  );
}

export default App;
