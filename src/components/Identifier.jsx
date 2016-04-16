import React, { Component } from 'react'
import { defaultOptions, availableDataTypes } from '../utils/salesforceUtils'
import { Checkbox, Col, FieldSet, Form, Grid, Input, Option, Row, Select } from 'react-lightning-design-system'

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
        return <Col padded cols={2}><Input label='Value' type='text' value={attributes.value} onChange={handleValueChange} /></Col>
      case 'text':
        return <Col padded cols={2}><Input label='Value' type='text' value={attributes.value} onChange={handleValueChange} /></Col>
      case 'checkbox':
        return <Col padded cols={2}>
          <legend className="slds-form-element__label">Value</legend>
          <Checkbox value={attributes.value} onChange={handleValueChange} />
        </Col>
    }
  }

  renderDataType(attributes, onDataTypeChange) {
    let handleDataTypeChange = (event) => {
      onDataTypeChange(attributes.name, event.target.value)
    }

    return <Col padded cols={1}>
      <Select label='Data Type' defaultValue={availableDataTypes[0].id} onChange={handleDataTypeChange}>
        {availableDataTypes.map((dataTypeOption) =>
          <Option key={dataTypeOption.id} value={dataTypeOption.id} label={dataTypeOption.label} />)
        }
      </Select>
    </Col>
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

    return [
      <Col key="length" padded cols={1}><Input label='Length' type='text' value={attributes.options.length} onChange={handleOptionsLengthChange} /></Col>,
      <Col key="scale" padded cols={1}><Input label='Scale' type='text' value={attributes.options.scale} onChange={handleOptionsScaleChange} /></Col>
    ]
  }

  renderTextOptions(attributes, onOptionsTextChange) {
    let handleOptionsLengthChange = (event) => {
      onOptionsTextChange(attributes.name, {length: event.target.value})
    }

    return <Col padded cols={2}>
        <Input label='Length' type='text' value={attributes.options.length} onChange={handleOptionsLengthChange} />
    </Col>
  }

  renderEmptyOptions() {
    return <Col padded cols={2} />
  }

  render () {
    const { attributes } = this.props

    return  <Row cols={5}>
        { this.renderValue(attributes, this.props.changeIdentifierValue) }
        { this.renderDataType(attributes, this.props.changeIdentifierDataType)}
        { this.renderOptions(attributes, this.props.changeIdentifierOptions)}
      </Row>
  }
}
