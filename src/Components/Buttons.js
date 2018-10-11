import React, { Component } from 'react'
import Button from './Button'

export default class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      digits: []
    };
  }

  componentWillMount(){
    this.setState({
      digits: { 
        zero:  "0", 
        one:   "1", 
        two:   "2", 
        three: "3", 
        four:  "4", 
        five:  "5", 
        six:   "6", 
        seven: "7", 
        eight: "8", 
        nine:  "9",
        dot:   "."
      },
      operators: { 
        divide:   "/", 
        multiply: "x", 
        minus:    "-", 
        plus:     "+", 
        evaluate: "="
      },
      options: {
        invert: "+/-",
        percent:  "%",
        clear:    "AC"
      }
    })
  }

  handleClick(num){
    this.props.onClick(num);
  }

  render() {

    let digits = [];
    let operators = [];
    let options = [];
    
    for (const key in this.state.digits) {
      digits.push(
        <Button 
          key={key} 
          type="digit"
          name={key} 
          value={this.state.digits[key]} 
          onClick={this.handleClick.bind(this)} />
      )
    }

    for (const key in this.state.operators) {
      operators.push(
        <Button 
          key={key}
          type="operator" 
          name={key} 
          value={this.state.operators[key]} 
          onClick={this.handleClick.bind(this)} />
      )
    }

    for (const key in this.state.options) {
      options.push(
        <Button 
          key={key}
          type="option" 
          name={key} 
          value={this.state.options[key]} 
          onClick={this.handleClick.bind(this)} />
      )
    }

    return (
      <div className="buttons" >
        {digits}
        {operators}
        {options}
      </div>
    )
  }
}
