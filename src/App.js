import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HeartRateTable from './Components/HeartRateTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <HeartRateTable />
      </header>
    </div>
  );
}

export default App;
