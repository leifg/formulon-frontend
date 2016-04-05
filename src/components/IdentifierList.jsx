import React, { Component } from 'react'
import Identifier from './Identifier'

export default class IdentifierList extends Component {
  render () {
    const { identifiers, changeIdentifierValue, changeIdentifierDataType } = this.props
    return (
        <table className='table table-responsive'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <th>Data Type</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {identifiers.map((identifierAttributes) =>
              <Identifier key={identifierAttributes.name} attributes={identifierAttributes} changeIdentifierValue={changeIdentifierValue} changeIdentifierDataType={changeIdentifierDataType}/>
            )}
          </tbody>
        </table>
    )
  }
}
