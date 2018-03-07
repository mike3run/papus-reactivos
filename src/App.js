import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = ({
  onSubmit,
  username,
  onChange,
  picture,
  fullName,
  hasLoaded = false
}) =>
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Github User Finder</h1>
    </header>

    <div className='search-bar'>
      <form onSubmit={onSubmit}>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          placeholder='Username'
          id='username'
          value={username}
          onChange={onChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>

    {hasLoaded &&
    <div className='user'>
      <img src={picture} alt={username} />
      <h1>{fullName}</h1>
    </div>
    }
  </div>

export default App;
