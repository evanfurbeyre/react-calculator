import React, { Component } from 'react'

export default class Button extends Component {

  handleClick = () => {
    this.props.onClick(this.props.value, this.props.name, this.props.type);
  }

  render() {
    return (
      <div className={`button ${this.props.type} ${this.props.name}`} onClick={this.handleClick}>
        <div className="centerize">
          <span className="symbol" value={this.props.value}>{this.props.value}</span>
        </div>
      </div>
    )
  }
}
