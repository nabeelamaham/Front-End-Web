import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet.js';
//import Greet from './components/Greet.js';
import Welcome from './components/welcome';

class App extends Component {
render(){  
  return (
    <div className="App">
  <Greet />
  <Welcome />
    </div>
  );
}
}
export default App;
