import React, { Component } from "react"

export default class Identifier extends Component {
  render() {
    const { attributes, changeIdentifier } = this.props
    const dataTypeOptions = [
        { value: 'number', label: 'Number' },
        { value: 'text', label: 'Text' }
    ];

    if(!attributes.dataType) {
      attributes.dataType = dataTypeOptions[0].value
    }

    return  <tr>
                <td><strong>{attributes.name}</strong></td>
                <td><input className="form-control" value={attributes.value} onChange={this.handleValueChange.bind(this)} /></td>
                <td>
                  <select className="form-control" placeholder="Data Type" onChange={this.handleDataTypeChange.bind(this)}>
                    { dataTypeOptions.map(dataTypeOption =>
                      <option value={dataTypeOption.value}>{dataTypeOption.label}</option>)
                    }
                  </select>
                </td>
             </tr>
  }

  handleValueChange(event) {
    this.props.changeIdentifier(this.props.attributes.name, event.target.value, this.props.attributes.dataType)
  }

  handleDataTypeChange(event) {
    this.props.changeIdentifier(this.props.attributes.name, this.props.attributes.value, event.target.value)
  }
}
