import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = ({ papus, ...rest }) =>
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React {logo}</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <ul>
      {papus && papus.map((papu, index) =>
        <li key={index}>{papu}</li>
      )}
    </ul>
  </div>

export default App;
