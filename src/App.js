import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Home from './components/Home'
import Dog from "./components/Dog"
import DogList from './components/DogList'


function App() {
  return (
    <div className="App">
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dog-list">The Dogs</Link>
      </nav>
      <Route exact path="/">
          <Home />
      </Route>
      <Route exact path="/dog-list">
          <DogList/>
      </Route>
      <Route path="/dog-list'/:id">
          <Dog />
      </Route>
      
    </div>
  );
}

export default App;
