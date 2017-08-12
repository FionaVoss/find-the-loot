import React, { Component } from 'react';
import {emojify} from 'react-emojione';

export class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ':question:'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if(this.props.id == this.props.treasureLocation) {
      var newText = ':moneybag:'
    } else if(this.props.id == this.props.bombLocation) {
      var newText = ':bomb:'
    } else {
      var newText = ':palm_tree:'
    }
    this.setState({ text: newText })
  }
  render() {
    return (
      <td
       style={{ height: 200, width: 200}}
       onClick={this.handleClick}>
        { emojify(this.state.text, { style: { height: 100 }}) }
      </td>
    )
  }
}
