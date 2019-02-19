import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Head from './Head';
import Footer from "./Footer";
import 'tachyons' ;
import Expt from "./Expt";
import Card2 from "./Card";
import Cardlist from "./Cardlist";
import {robots} from "./robots.js";
{/*import Card from "./Price"; */}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
          <Head/>  
        <h1>my name is anthony gonsalves</h1>
            <Cardlist robots={robots}/>
            <div className="container-fluid flex justify-center">
                <div className="w-25 ma1 pa2 ">
                    <Card2/>
                </div>
                <div className="w-25 ma1 pa2 ">
                    <Card2/>
                </div>
                <div className="w-25 ma1 pa2 ">
                    <Card2/>
                </div>
                <div className="w-25 ma1 pa2 ">
                    <Card2/>
                </div>
                               
            </div>
            <Expt/>
        <Footer/>    
      </div>
    );
  }
}

export default App;
