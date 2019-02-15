import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Expt from './Expt';
import Head from './Head';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Expt/>
          <Head/>  
        <h1>my name is anthony</h1>
            
      </div>
    );
  }
}

export default App;
