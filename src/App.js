import React, { useState } from 'react';

import data from '../src/database/names.json'

import './App.css';

const App = () => {
  const [name, setName] = useState('')

  const handleNameChange = index => {
    setName(data[index].name)
  }

  const handleSubmit = e => {
    handleNameChange(getRandomIndex(9))
  }

  const getRandomIndex = max => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Value goes here"
            value={name}
            onChange={handleNameChange}
          />
          <input type="submit" style={{ fontSize: '3rem' }} value="Generate" />
        </form>
      </header>
    </div>
  );
}

export default App;
