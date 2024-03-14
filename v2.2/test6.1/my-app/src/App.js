// App.js

import React from 'react';
import AgentsList from './AgentsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>List of Agents</h1>
      <div className="agents-container">
        <AgentsList />
      </div>
    </div>
  );
}

export default App;
