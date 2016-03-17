import React, { Component } from "react"
import Identifier from "./Identifier"

export default class IdentifierList extends Component {
  render() {
    const { identifiers, changeIdentifier } = this.props
    return (
      <ul>
        {identifiers.map(identifierAttributes =>
          <Identifier key={identifierAttributes.name} attributes={identifierAttributes} changeIdentifier={changeIdentifier}/>
        )}
      </ul>
    )
  }
}
