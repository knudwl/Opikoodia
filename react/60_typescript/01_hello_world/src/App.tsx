import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';

function App() {
  return (
    <div className="App">
      <HelloWorld name="Teemu"/>
      <HelloWorld/>
    </div>
  );
}

export default App;
