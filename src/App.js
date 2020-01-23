import React from 'react';
import './App.css';
import Home from './components/Home'
import Dog from "./components/Dog"
import DogList from './components/DogList'
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dog-list">The Dogs</Link>
      </div>
      <Route exact path="/">
          <Home />
      </Route>
      <Route path="dog-list">
          <DogList/>
      </Route>
      <Route path="dog-list'/:id">
          <Dog />
      </Route>
      
    </div>
  );
}

export default App;
