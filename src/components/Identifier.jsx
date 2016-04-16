import React, { Component } from 'react'
import { defaultOptions, availableDataTypes } from '../utils/salesforceUtils'
import { Checkbox, Col, FieldSet, Form, Input, Option, Select } from 'react-lightning-design-system'

export default class Identifier extends Component {
  renderValue(attributes, onValueChange) {
    let handleValueChange = (event) => {
      let target = event.target
      let value = target.value

      if(target.type == 'checkbox') {
        value = target.checked
      }
      onValueChange(attributes.name, value)
    }

    switch (attributes.dataType) {
      case 'number':
        return <FieldSet><FieldSet.Row><Input label='Value' type='text' value={attributes.value} onChange={handleValueChange} /></FieldSet.Row></FieldSet>
      case 'text':
        return <FieldSet><FieldSet.Row><Input label='Value' type='text' value={attributes.value} onChange={handleValueChange} /></FieldSet.Row></FieldSet>
      case 'checkbox':
        return <FieldSet><FieldSet.Row><Checkbox label='Checked' value={attributes.value} onChange={handleValueChange} /></FieldSet.Row></FieldSet>
    }
  }

  renderDataType(attributes, onDataTypeChange) {
    let handleDataTypeChange = (event) => {
      onDataTypeChange(attributes.name, event.target.value)
    }

    return <FieldSet>
      <FieldSet.Row>
        <Select label='Data Type' defaultValue={availableDataTypes[0].id} onChange={handleDataTypeChange}>
          {availableDataTypes.map((dataTypeOption) =>
            <Option key={dataTypeOption.id} value={dataTypeOption.id} label={dataTypeOption.label} />)
          }
        </Select>
      </FieldSet.Row>
    </FieldSet>
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

export class IdentifierOptions extends Component {
  render () {
    const { dataType, options, name, changeIdentifierOptions } = this.props

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
