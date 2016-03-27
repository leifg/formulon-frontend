import React, { Component } from 'react'
import { defaultMeta, availableDataTypes } from '../utils/salesforceUtils'

export default class Identifier extends Component {
  render () {
    const { attributes } = this.props

    if (!attributes.dataType) {
      attributes.dataType = availableDataTypes[0].id
    }

    if (!attributes.options) {
      attributes.options = defaultMeta(attributes.dataType)
    }

    return <tr>
      <td><IdentifierName name={attributes.name} /></td>
      <td><IdentifierValue name={attributes.name} value={attributes.value} changeIdentifierValue={this.props.changeIdentifierValue} /></td>
      <td><IdentifierDataType name={attributes.name} dataType={attributes.dataType} changeIdentifierDataType={this.props.changeIdentifierDataType}/></td>
    </tr>
  }
}

export class IdentifierName extends Component {
  render () {
    return <strong>{this.props.name}</strong>
  }
}

export class IdentifierValue extends Component {
  render () {
    return <input className='form-control' value={this.props.value} onChange={this.handleValueChange.bind(this)} />
  }

  handleValueChange (event) {
    this.props.changeIdentifierValue(this.props.name, event.target.value)
  }
}

export class IdentifierDataType extends Component {
  render () {
    return <select className='form-control' placeholder='Data Type' onChange={this.handleDataTypeChange.bind(this)}>
      {availableDataTypes.map((dataTypeOption) =>
        <option value={dataTypeOption.id}>{dataTypeOption.label}</option>)
      }
    </select>
  }

  handleDataTypeChange (event) {
    this.props.changeIdentifierDataType(this.props.name, event.target.value)
  }
}
