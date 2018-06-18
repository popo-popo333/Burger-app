import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, there i'm sibu </h1>
        <p> tis is working </p>
        <Person ></Person>
      </div>
    );
   // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I am sibu'));
   return React.createElement('h1',null,'i am sibu');
   return React.crea//teElement('h1',null,'i am sibu');
  } 
}

export default App; 
