import React, { Component } from 'react';
import Screen from './Components/Screen';
import Buttons from './Components/Buttons';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {  
      screen: "0",
      result: 0,
      curOper: null
    };
  }

  // handleClick according button's value, name, and type
  handleClick(value, name, type) {
    let screen = this.state.screen;
    let result = this.state.result;
    let curOper = this.state.curOper;

    if (type === "digit"){

      if (curOper || screen === "0") {
        screen = value;
      } else {
        screen += value;
      }

    } else if ( type === "operator") {

      if (!curOper) {
        curOper = name;
        result = parseFloat(screen);
      } else {
        if (curOper === "plus") {
          result += parseFloat(screen);
        } else if (curOper === "subtract") {
          result -= parseFloat(screen);
        } else if (curOper === "multiply") {
          result *= parseFloat(screen);
        } else if (curOper === "divide") {
          result /= parseFloat(screen);
        }

        screen = result;
      }


    } else if ( type === "option") {
      if (name === "clear") {
        result = 0;
      } else if (name === "invert") {
        result *= -1;
      } else if (name === "percent") {
        result /= 100; 
      }

    }
    
    this.setState({
      result: result,
      screen: screen,
      curOper: curOper
    });
  }



  render() {
    return (
      <div className="calculator">
        <Screen result={this.state.screen}/>
        <Buttons onClick={this.handleClick.bind(this)}/>
      </div>
    )
  }
}
