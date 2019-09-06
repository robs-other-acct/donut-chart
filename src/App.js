import React from 'react';
import logo from './logo.svg';
import './App.css';
import SliderInput from './components/slider/sliderInput';
function App() {
  return (
    <div id="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SliderInput />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
