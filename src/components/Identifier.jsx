import React, { Component } from 'react'
import { defaultOptions, availableDataTypes } from '../utils/salesforceUtils'
import { Checkbox, Col, DropdownButton, FieldSet, Form, Grid, Input, MenuItem, Option, Row, Select } from 'react-lightning-design-system'

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
    let handleDataTypeChange = (item) => {
      onDataTypeChange(attributes.name, item.value)
    }

    let selectedDataType = availableDataTypes.find((dataType) => {
      return dataType.id == attributes.dataType
    })

    return <Col padded cols={1}>
      <FieldSet label='Data Type'>
        <DropdownButton type='neutral' label={selectedDataType.label} onMenuItemClick={handleDataTypeChange}>
          {availableDataTypes.map((dataTypeOption) =>
            <MenuItem key={dataTypeOption.id} value={dataTypeOption.id}>{dataTypeOption.label}</MenuItem>)
          }
        </DropdownButton>
      </FieldSet>
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
