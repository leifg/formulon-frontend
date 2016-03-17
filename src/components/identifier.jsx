import React, { Component } from "react"

// const Identifier = ({ name }) => <li> {name} </li>
// export default Identifier

export default class Identifier extends Component {
  render() {
    const { attributes, changeIdentifier } = this.props
    return <li> {attributes.name}:
      <input type="text" value={attributes.value} onChange={this.handleValueChange.bind(this)} />
      <input type="text" value={attributes.dataType} onChange={this.handleDataTypeChange.bind(this)} /> </li>
  }

  handleValueChange(event) {
    this.props.changeIdentifier(this.props.attributes.name, event.target.value, this.props.attributes.dataType)
  }

  handleDataTypeChange(event) {
    this.props.changeIdentifier(this.props.attributes.name, this.props.attributes.value, event.target.value)
  }
}
