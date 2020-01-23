import React from 'react';
import './App.css';
import Home from './components/Home'
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="nav-links">
        <Link>Home</Link>
        <Link>The Dogs</Link>
      </div>
      <Home />
    </div>
  );
}

export default App;
