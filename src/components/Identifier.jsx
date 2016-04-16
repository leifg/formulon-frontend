import React, { Component } from 'react'
import { defaultOptions, availableDataTypes } from '../utils/salesforceUtils'
import { Checkbox, Col, FieldSet, Form, Input, Option, Select } from 'react-lightning-design-system'

export default class Identifier extends Component {
  renderValue(attributes, onValueChange) {
    return <IdentifierValue name={attributes.name} value={attributes.value} dataType={attributes.dataType} changeIdentifierValue={onValueChange} />
  }

  renderDataType(attributes, onDataTypeChange) {
    return <IdentifierDataType name={attributes.name} dataType={attributes.dataType} changeIdentifierDataType={onDataTypeChange}/>
  }

  renderOptions(attributes, onOptionsChange) {
    return <IdentifierOptions name={attributes.name} dataType={attributes.dataType} options={attributes.options} changeIdentifierOptions={onOptionsChange}/>
  }

  render () {
    const { attributes } = this.props

    return <FieldSet label={attributes.name}>
      <FieldSet.Row>
        { this.renderValue(attributes, this.props.changeIdentifierValue) }
        { this.renderDataType(attributes, this.props.changeIdentifierDataType)}
        { this.renderOptions(attributes, this.props.changeIdentifierOptions)}
      </FieldSet.Row>
    </FieldSet>
  }
}

export class IdentifierValue extends Component {
  render () {
    switch (this.props.dataType) {
      case 'number':
      return <FieldSet><FieldSet.Row><Input label='Value' type='text' value={this.props.value} onChange={this.handleValueChange.bind(this)} /></FieldSet.Row></FieldSet>
      case 'text':
        return <FieldSet><FieldSet.Row><Input label='Value' type='text' value={this.props.value} onChange={this.handleValueChange.bind(this)} /></FieldSet.Row></FieldSet>
      case 'checkbox':
        return <FieldSet><FieldSet.Row><Checkbox label='Checked' value={this.props.value} onChange={this.handleValueChange.bind(this)} /></FieldSet.Row></FieldSet>
    }
  }

  handleValueChange (event) {
    let target = event.target
    let value = target.value

    if(target.type == 'checkbox') {
      value = target.checked
    }
    this.props.changeIdentifierValue(this.props.name, value)
  }
}

export class IdentifierDataType extends Component {
  render () {
    return <FieldSet>
      <FieldSet.Row>
        <Select label='Data Type' defaultValue={availableDataTypes[0].id} onChange={this.handleDataTypeChange.bind(this)}>
          {availableDataTypes.map((dataTypeOption) =>
            <Option key={dataTypeOption.id} value={dataTypeOption.id} label={dataTypeOption.label} />)
          }
        </Select>
      </FieldSet.Row>
    </FieldSet>
  }

  handleDataTypeChange (event) {
    this.props.changeIdentifierDataType(this.props.name, event.target.value)
  }
}

export class IdentifierOptions extends Component {
  render () {
    const { dataType, options, name, changeIdentifierOptions } = this.props

    if (!options) {
      attributes.options = defaultOptions(dataType)
    }

    switch (dataType) {
      case 'number':
        return <IdentifierOptionsNumber name={name} options={options} changeIdentifierOptions={changeIdentifierOptions}/>
      case 'text':
        return <IdentifierOptionsText name={name} options={options} changeIdentifierOptions={changeIdentifierOptions}/>
      default:
        return <IdentifierOptionsEmpty />
    }
  }
}

export class IdentifierOptionsNumber extends Component {
  render () {
    return <FieldSet>
      <FieldSet.Row>
        <Input label='Length' type='text' value={this.props.options.length} onChange={this.handleOptionsLengthChange.bind(this)} />
        <Input label='Scale' type='text' value={this.props.options.scale} onChange={this.handleOptionsScaleChange.bind(this)} />
      </FieldSet.Row>
    </FieldSet>
  }

  handleOptionsLengthChange (event) {
    this.props.changeIdentifierOptions(this.props.name, {length: event.target.value, scale: this.props.options.scale})
  }

  handleOptionsScaleChange (event) {
    this.props.changeIdentifierOptions(this.props.name, {length: this.props.options.length, scale: event.target.value})
  }
}

export class IdentifierOptionsText extends Component {
  render () {
    return <FieldSet>
      <FieldSet.Row>
        <Input label='Length' type='text' value={this.props.options.length} onChange={this.handleOptionsLengthChange.bind(this)} />
      </FieldSet.Row>
    </FieldSet>
  }

  handleOptionsLengthChange (event) {
    this.props.changeIdentifierOptions(this.props.name, {length: event.target.value})
  }
}

export class IdentifierOptionsEmpty extends Component {
  render () {
    return <FieldSet />
  }
}
