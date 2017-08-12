import React, { Component } from 'react';
import './App.css';
import { Square } from './Square';
import { emojify } from 'react-emojione';

class App extends Component {
  constructor(props) {
    super(props);
    var treasureLocation = Math.floor(Math.random()*9) + 1;
    var bombLocation = Math.floor(Math.random()*9) + 1;
    while(treasureLocation == bombLocation) {
      var bombLocation = Math.floor(Math.random()*9) + 1;
    }
    this.state = {
      treasureLocation: treasureLocation,
      bombLocation: bombLocation
    }
  }
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
            <Square id='1'
             treasureLocation={ this.state.treasureLocation }
             bombLocation={ this.state.bombLocation }
            />
            <Square id='2'
             treasureLocation={ this.state.treasureLocation }
             bombLocation={ this.state.bombLocation }
            />
            <Square id='3'
             treasureLocation={ this.state.treasureLocation }
             bombLocation={ this.state.bombLocation }
            />
          </tr>
          <tr>
            <Square id='4'
             treasureLocation={ this.state.treasureLocation }
             bombLocation={ this.state.bombLocation }
            />
            <Square id='5'
             treasureLocation={ this.state.treasureLocation }
             bombLocation={ this.state.bombLocation }
            />
            <Square id='6'
             treasureLocation={ this.state.treasureLocation }
             bombLocation={ this.state.bombLocation }
            />
          </tr>
          <tr>
            <Square id='7'
             treasureLocation={ this.state.treasureLocation }
             bombLocation={ this.state.bombLocation }
            />
            <Square id='8'
             treasureLocation={ this.state.treasureLocation }
             bombLocation={ this.state.bombLocation }
            />
            <Square id='9'
             treasureLocation={ this.state.treasureLocation }
             bombLocation={ this.state.bombLocation }
            />
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
