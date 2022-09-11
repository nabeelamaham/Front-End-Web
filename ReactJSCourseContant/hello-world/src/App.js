import React, {Component} from 'react';
import './App.css';
//import {Greet} from './components/Greet.js';
import Greet from './components/Greet.js';
import Welcome from './components/welcome';
import Hello from './components/Hello';

class App extends Component {
render(){  
  return (
    <div className="App">
  <Greet name="Nabeela" heroName="FirstName">
    <p>This is the children property</p>
    </Greet>
  <Greet name="Maham" heroName="LastName">
  <button>Action</button>
  </Greet>
  
  <Greet name="Shakeel" heroName="FatherName"/>
   <Welcome name="Nabeela" heroName="FirstName"/>
   <Welcome name="Maham" heroName="LastName"/>
   <Welcome name="Shakeel" heroName="FatherName"/>
  {/* <Hello /> */}
    </div>
  );
}
}
export default App;
