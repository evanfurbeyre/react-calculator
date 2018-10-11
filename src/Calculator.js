import React, { Component } from 'react'
import Screen from './Components/Screen'
import Buttons from './Components/Buttons'

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: 0,
      curOpr: "",

    };
  }

  // handleClick according button's value, name, and type
  handleClick(value, name, type) {
    this.setState({result: value});
  }

  render() {
    return (
      <div className="calculator">
        <Screen result={this.state.result}/>
        <Buttons onClick={this.handleClick.bind(this)}/>
      </div>
    )
  }
}
