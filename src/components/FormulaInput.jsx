import React, { Component } from 'react'
import { Textarea } from 'react-lightning-design-system'

export default class FormulaInput extends Component {
  render () {
    return <Textarea label='Formula' style={{fontFamily: 'monospace', fontSize: '15px'}} onChange={this.handleChange.bind(this)} placeholder='Start typing your formula' />
  }

  handleChange (event) {
    this.props.changeFormula(event.target.value)
  }
}
