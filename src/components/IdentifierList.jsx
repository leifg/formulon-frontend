import React, { Component } from "react"
import Identifier from "./Identifier"

export default class IdentifierList extends Component {
  render() {
    const { identifiers } = this.props
    return (
      <ul>
        {Object.keys(identifiers).map(identifier =>
          <Identifier name={identifier}/>
        )}
      </ul>
    )
  }
}
