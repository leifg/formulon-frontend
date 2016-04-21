import React, { Component } from 'react'
import { availableDataTypes } from '../utils/salesforceUtils'
import { Checkbox, Col, Input, Picklist, PicklistItem, Row } from 'react-lightning-design-system'

export default class Identifier extends Component {

  // There is currently no way to refactor the individual parts into components
  // The Data Type component will contain 2 Columns
  // Wrapping multiple Columns into any element will result in wrong rendering
  // There is already a discussion in the React repository about this issue
  // https://github.com/facebook/react/issues/2127

  renderValue (attributes, onValueChange) {
    let handleValueChange = (event) => {
      let target = event.target
      let value = target.value

      if (target.type === 'checkbox') {
        value = target.checked
      }
      onValueChange(attributes.name, value)
    }

    switch (attributes.dataType) {
      case 'number':
        return <Col padded cols={5}><Input label='Value' type='text' value={attributes.value} onChange={handleValueChange} /></Col>
      case 'text':
        return <Col padded cols={5}><Input label='Value' type='text' value={attributes.value} onChange={handleValueChange} /></Col>
      case 'checkbox':
        return <Col padded cols={5}>
          <label className='slds-form-element__label'>Value</label>
          <Checkbox value={attributes.value} onChange={handleValueChange} />
        </Col>
    }
  }

  renderDataType (attributes, onDataTypeChange) {
    let handleDataTypeChange = (item) => {
      onDataTypeChange(attributes.name, item)
    }

    let selectedDataType = availableDataTypes.find((dataType) => {
      return dataType.id === attributes.dataType
    })

    return <Col padded cols={3}>
      <Picklist label='Data Type' onValueChange={handleDataTypeChange} selectedText={selectedDataType.label}>
        {availableDataTypes.map((dataTypeOption) =>
          <PicklistItem key={dataTypeOption.id} value={dataTypeOption.id}>{dataTypeOption.label}</PicklistItem>)
        }
      </Picklist>
    </Col>
  }

  renderOptions (attributes, onOptionsChange) {
    switch (attributes.dataType) {
      case 'number':
        return this.renderNumberOptions(attributes, onOptionsChange)
      case 'text':
        return this.renderTextOptions(attributes, onOptionsChange)
      default:
        return this.renderEmptyOptions()
    }
  }

  renderNumberOptions (attributes, onOptionsNumberChange) {
    let handleOptionsLengthChange = (event) => {
      onOptionsNumberChange(attributes.name, {length: event.target.value, scale: attributes.options.scale})
    }

    let handleOptionsScaleChange = (event) => {
      onOptionsNumberChange(attributes.name, {length: attributes.options.length, scale: event.target.value})
    }

    return [
      <Col key='length' padded cols={2}><Input label='Length' type='text' value={attributes.options.length} onChange={handleOptionsLengthChange} /></Col>,
      <Col key='scale' padded cols={2}><Input label='Scale' type='text' value={attributes.options.scale} onChange={handleOptionsScaleChange} /></Col>
    ]
  }

  renderTextOptions (attributes, onOptionsTextChange) {
    let handleOptionsLengthChange = (event) => {
      onOptionsTextChange(attributes.name, {length: event.target.value})
    }

    return <Col padded cols={4}>
      <Input label='Length' type='text' value={attributes.options.length} onChange={handleOptionsLengthChange} />
    </Col>
  }

  renderEmptyOptions () {
    return <Col padded cols={4} />
  }

  render () {
    const { attributes } = this.props

    return <Row cols={12}>
      {this.renderDataType(attributes, this.props.changeIdentifierDataType) /* 3 cols */}
      {this.renderValue(attributes, this.props.changeIdentifierValue) /* 5 cols */}
      {this.renderOptions(attributes, this.props.changeIdentifierOptions) /* 4 cols */}
    </Row>
  }
}
