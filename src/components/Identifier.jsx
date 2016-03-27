import React, { Component } from 'react'
import { defaultMeta } from '../utils/salesforceUtils'

export default class Identifier extends Component {
  render () {
    const { attributes } = this.props
    const dataTypeOptions = [
        { value: 'number', label: 'Number' },
        { value: 'text', label: 'Text' }
    ]

    if (!attributes.dataType) {
      attributes.dataType = dataTypeOptions[0].value
    }

    if (!attributes.options) {
      attributes.options = defaultMeta(attributes.dataType)
    }

    return <tr>
      <td><IdentifierName name={attributes.name} /></td>
      <td><input className='form-control' value={attributes.value} onChange={this.handleValueChange.bind(this)} /></td>
      <td>
        <select className='form-control' placeholder='Data Type' onChange={this.handleDataTypeChange.bind(this)}>
          {dataTypeOptions.map((dataTypeOption) =>
            <option value={dataTypeOption.value}>{dataTypeOption.label}</option>)
          }
        </select>
      </td>
    </tr>
  }

  handleValueChange (event) {
    this.props.changeIdentifierValue(this.props.attributes.name, event.target.value)
  }

  handleDataTypeChange (event) {
    console.log(this.props)
    this.props.changeIdentifierDataType(this.props.attributes.name, event.target.value)
  }
}

export class IdentifierName extends Component {
  render () {
    return <strong>{this.props.name}</strong>
  }
}

// export class IdentifierValue extends Component {
//   render () {
//     return <input className='form-control' value={this.props.value} onChange={this.handleValueChange.bind(this)} />
//   }

//   handleValueChange (event) {
//     this.props.changeIdentifier(this.props.attributes.name, event.target.value, this.props.attributes.dataType)
//   }
// }
