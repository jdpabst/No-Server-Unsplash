import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Pins from './Components/Pins/Pins';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Pins />
      </div>
    );
  }
}

export default App;
