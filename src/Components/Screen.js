import React, { Component } from 'react'

export default class Screen extends Component {
  render() {
    return (
      <div className="screen">
        {this.props.result}
      </div>
    )
  }
}
