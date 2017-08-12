import React, { Component } from 'react';
import './App.css';
import { Square } from './Square';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Find the Loot</h2>
        <table style={{fontSize: 100}}>
          <tr>
            <Square/>
            <Square/>
            <Square/>
          </tr>
          <tr>
            <Square/>
            <Square/>
            <Square/>
          </tr>
          <tr>
            <Square/>
            <Square/>
            <Square/>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
