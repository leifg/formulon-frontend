import React, { Component } from 'react'
import Identifier from './Identifier'

export default class IdentifierList extends Component {
  render () {
    const { identifiers, changeIdentifier } = this.props
    return (
      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <th>DataType</th>
            </tr>
          </thead>
          <tbody>
            {identifiers.map((identifierAttributes) =>
              <Identifier key={identifierAttributes.name} attributes={identifierAttributes} changeIdentifier={changeIdentifier}/>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
