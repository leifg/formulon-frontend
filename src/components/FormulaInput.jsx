import React, { Component } from 'react'

export default class FormulaInput extends Component {
  render () {
    return <div className='form-group'>
      <textarea className='form-control' style={{fontFamily: 'monospace'}} onChange={this.handleChange.bind(this)} />
    </div>
  }

  handleChange (event) {
    this.props.changeFormula(event.target.value)
  }
}
