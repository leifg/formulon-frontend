import React, { Component } from "react"

export default class FormulaInput extends Component {
  render() {
    return <textarea onChange={this.handleChange.bind(this)}></textarea>
  }

  handleChange(event) {
    this.props.changeFormula(event.target.value)
  }
}
