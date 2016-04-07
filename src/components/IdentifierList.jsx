import React, { Component } from 'react'
import { Row } from 'react-lightning-design-system'
import Identifier from './Identifier'

export default class IdentifierList extends Component {
  render () {
    const { identifiers, changeIdentifierDataType, changeIdentifierOptions, changeIdentifierValue } = this.props
    return (
      <Row>
        {identifiers.map((identifierAttributes) =>
          <Row>
            <Identifier key={identifierAttributes.name} attributes={identifierAttributes} changeIdentifierValue={changeIdentifierValue} changeIdentifierDataType={changeIdentifierDataType} changeIdentifierOptions={changeIdentifierOptions}/>
          </Row>
        )}
      </Row>
    )
  }
}
