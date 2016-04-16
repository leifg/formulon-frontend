import React, { Component } from 'react'
import { Grid } from 'react-lightning-design-system'
import Identifier from './Identifier'

export default class IdentifierList extends Component {
  render () {
    const { identifiers, changeIdentifierDataType, changeIdentifierOptions, changeIdentifierValue } = this.props
    return (
      <Grid>
        {identifiers.map((identifierAttributes) =>
          [
            <h2 className='slds-m-vertical--medium'>{identifierAttributes.name}</h2>,
            <Identifier key={identifierAttributes.name} attributes={identifierAttributes} changeIdentifierValue={changeIdentifierValue} changeIdentifierDataType={changeIdentifierDataType} changeIdentifierOptions={changeIdentifierOptions}/>
          ]
        )}
      </Grid>
    )
  }
}
