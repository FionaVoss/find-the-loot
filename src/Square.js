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
    this.setState({ text: ':palm_tree:'})
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
