import React from 'react';
import {Router} from '@reach/router';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Content path="/city/:city" />
      </Router>
    </div>
  );
}

export default App;
