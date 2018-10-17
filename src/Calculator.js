import React, { Component } from 'react';
import Screen from './Components/Screen';
import Buttons from './Components/Buttons';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {  
      screen: 0,
      result: 0,
      curOper: null
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
      screen: parseFloat(data.screen),
      result: data.result,
      curOper: data.curOper
    })
  }

  handleDigit(data) {
    console.log("handling digit")
    let {curOper, value, screen, result} = data;
    if (!curOper) {
      data.screen = parseFloat("" + screen + value);
    } else {
      data.screen = parseFloat(value);
      data.result = result + value;
      data.curOper = null;
    }
  }

  handleOperator(data) {
    console.log("handling op")

    let {curOper, name, result, screen} = data;

    if (!curOper) {
      curOper = name;
      result = parseFloat(screen);
    } else {
      if (curOper === "plus") {
        result += parseFloat(screen);
      } else if (curOper === "minus") {
        result -= parseFloat(screen);
      } else if (curOper === "multiply") {
        result *= parseFloat(screen);
      } else if (curOper === "divide") {
        result /= parseFloat(screen);
      }


    }
    data.screen = result;
    data.result = result;
    data.curOper = curOper;
    console.log(data)

  }

  handleOption(data) {
    let { result, name } = data;

    if (name === "clear") {
      result = 0;
    } else if (name === "invert") {
      result *= -1;
    } else if (name === "percent") {
      result /= 100; 
    }

    data.screen = result;
    data.result = result;

  }

  setScreen() {
    let {curOper, screen, result} = this.state;
    // console.log(screen);
    screen = parseFloat(screen);
    // console.log(screen);
    this.setState({ result, screen, curOper });
  }

  render() {
    return (
      <div className="calculator">
        <Screen display={this.state.screen}/>
        <Buttons onClick={this.handleClick.bind(this)}/>
      </div>
    )
  }
}
