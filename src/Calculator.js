import React, { Component } from 'react';
import Screen from './Components/Screen';
import Buttons from './Components/Buttons';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      memory: 0,
      curOp: null,
      prevOp: null,
      screen: 0,
      screenStr: '0'
    };
  }

  // handleClick according to button's value, name, and type
  handleClick(value, name, type) {
    let data = {...this.state, value, name, type};
  
    if (type === "digit"){
      this.handleDigit(data);
    } else if ( type === "operator") {
      this.handleOperator(data);
    } else if ( type === "option") {
      this.handleOption(data);
    }

    this.setState({
      screenStr: data.screenStr,
      screen: data.screen,
      memory: data.memory,
      curOp: data.curOp,
      prevOp: data.prevOp
    })
  }

  handleDigit(data) {
    let { screenStr, value, curOp, prevOp } = data;

    // If the last button was an operation, set the screen to be value and move the curOp to prevOp
    if (curOp) {
      screenStr = value;
      prevOp = curOp;
      curOp = null;

    // Else don't reset, instead build the string
    } else { 
      screenStr += value;
    }

    data.screenStr = screenStr.replace(/^0+/, '');
    data.curOp = curOp;
    data.prevOp = prevOp;
  }

  handleOperator(data) {
    let { screenStr, curOp, prevOp, name, memory, screen } = data;

    // Set the current operation
    curOp = name;

    // Convert whats on the screen to a float
    screen = parseFloat(screenStr);

    // If there was a previous operation loaded, operate and evaluate
    if (prevOp) {
      screen = this.operate(screen, prevOp, memory);
    } 

    // Move the screen value into memory, and operation into prevOp
    memory = screen;
    prevOp = curOp;

    data.curOp = curOp;
    data.prevOp = prevOp;
    data.screen = screen;
    data.memory = memory;
    data.screenStr =  '' + screen;
  }

  handleOption(data) {
    let { screenStr, curOp, prevOp, name, memory, screen } = data;

    if (name === 'clear'){
      screen = 0;
      memory = 0;
      curOp = null;
      prevOp = null;
    } else if (name === 'invert'){
      screen = -parseFloat(screenStr);
    } else if (name === 'percent'){
      screen = parseFloat(screenStr)/100;
    }
  




    data.screen = screen;
    data.screenStr = '' + screen;
    data.memory = memory;
    data.curOp = curOp;
    data.prevOp = prevOp;
  }

  operate(val1, op, val2) {

    if (op === "plus") {
      return val1 + val2;
    } else if (op === "minus") {
      return val2 - val1;
    } else if (op === "multiply") {
      return val1 * val2;
    } else if (op === "divide") {
      return val1 / val2;
    }

  }

  render() {
    return (
      <div className="calculator">
        <Screen display={this.state.screenStr}/>
        <Buttons onClick={this.handleClick.bind(this)}/>
      </div>
    )
  }
}