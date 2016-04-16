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
    switch (attributes.dataType) {
      case 'number':
        return this.renderNumberOptions(attributes, onOptionsChange)
      case 'text':
        return this.renderTextOptions(attributes, onOptionsChange)
      default:
        return this.renderEmptyOptions()
    }
  }

  renderNumberOptions(attributes, onOptionsNumberChange) {
    let handleOptionsLengthChange = (event) => {
      onOptionsNumberChange(attributes.name, {length: event.target.value, scale: attributes.options.scale})
    }

    let handleOptionsScaleChange = (event) => {
      onOptionsNumberChange(attributes.name, {length: attributes.options.length, scale: event.target.value})
    }

    return <FieldSet>
      <FieldSet.Row>
        <Input label='Length' type='text' value={attributes.options.length} onChange={handleOptionsLengthChange} />
        <Input label='Scale' type='text' value={attributes.options.scale} onChange={handleOptionsScaleChange} />
      </FieldSet.Row>
    </FieldSet>
  }

  renderTextOptions(attributes, onOptionsTextChange) {
    let handleOptionsLengthChange = (event) => {
      onOptionsTextChange(attributes.name, {length: event.target.value})
    }

    return <FieldSet>
      <FieldSet.Row>
        <Input label='Length' type='text' value={attributes.options.length} onChange={handleOptionsLengthChange} />
      </FieldSet.Row>
    </FieldSet>
  }

  renderEmptyOptions() {
    return <FieldSet />
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
