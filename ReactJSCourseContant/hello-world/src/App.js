import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//import {Greet} from './components/Greet.js';
import Greet from './components/Greet.js';
import Welcome from './components/welcome';
import Hello from './components/Hello';

class App extends Component {
render(){  
  return (
    <div className="App">
  <Greet name="Nabeela"/>
  <Greet name="Maham"/>
  <Greet name="Shakeel"/>
  {/* <Welcome />
   <Hello /> */}
    </div>
  );
}
}
export default App;
