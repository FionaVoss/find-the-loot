import React, { Component } from 'react';
import './App.css';
import { Square } from './Square';
import {emojify} from 'react-emojione';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
        { emojify(':moneybag:') }
        Find the Loot
        { emojify(':moneybag:') }
        </h1>
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
