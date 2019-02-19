import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Head from './Head';
import Footer from "./Footer";
import Card from "./Price";
import 'tachyons' ;
import Expt from "./Expt";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
          <Head/>  
        <h1>my name is anthony</h1>
            <div className="container-fluid flex">
                    <div className="outline w-50 pa3 mr2">
                    <Card />            
                    </div>
               <div className="outline w-50 pa3 mr2">
                    <Card />            
                    </div>
               <div className="outline w-50 pa3 mr2">
                    <Card />            
                    </div>
               <div className="outline w-50 pa3 mr2">
                    <Card />            
                    </div>                          
            </div>
            
             <div className="container-fluid flex">
                    <div className="outline w-50 pa3 mr2">
                    <Card />            
                    </div>
               <div className="outline w-50 pa3 mr2">
                    <Card />            
                    </div>
               <div className="outline w-50 pa3 mr2">
                    <Card />            
                    </div>
               <div className="outline w-50 pa3 mr2">
                    <Card />            
                    </div>                          
            </div>
            
        <Footer/>    
      </div>
    );
  }
}

export default App;
